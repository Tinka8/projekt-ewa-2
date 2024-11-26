<?php
/**
 * Send message from contact form
 *
 * @category Messaging
 * @package  EWA
 * @author   tina818 <martina.gatkova@gmail.com>
 * @license  http://www.wtfpl.net/ WTFPL
 * @link     https://github.com/Tinka8/projekt-ewa-2
 * @since    1.0.0
 */

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| Default settings for sending email
|
*/

$from = 'ewa@axonpro.sk';
$to = 'ewa@axonpro.sk';
$subject = 'Nová správa z kontaktného formulára';
$currentLanguage = 'sk';
$googleRecaptchaSecret = '{GRECAPTCHA_SECRET_KEY}'; // Fill Google Recaptcha secret key
$isDev = str_contains($_SERVER['HTTP_HOST'], 'localhost') || str_contains($_SERVER['HTTP_HOST'], '.test');

$smtp = [
    'host' => 'sandbox.smtp.mailtrap.io',
    'username' => '1bc9ec8cb756a1',
    'password' => 'd8ce7a7f037af7',
    'port' => 465,
    'secure' => 'tls'
];

/*
|--------------------------------------------------------------------------
| Language
|--------------------------------------------------------------------------
|
| Language strings for submit validation and messages
|
*/

$lang = [
    'sk' => [
        'sent' => 'Správa bola odoslaná.',
        'failure' => 'Správu sa nepodarilo odoslať.',
        'validation' => [
            'name' => [
                'required' => 'Meno je povinné.',
            ],
            'lastname' => [
                'required' => 'Priezvisko je povinné.',
            ],
            'email' => [
                'required' => 'Email je povinný.',
                'email' => 'Email musí byť platný.',
            ],
            'message' => [
                'required' => 'Správa je povinná.',
            ],
            'recaptcha' => 'Prosím, potvrďte, že nie ste robot.'
        ]
    ]
];

/*
|--------------------------------------------------------------------------
| Third party libraries
|--------------------------------------------------------------------------
|
| Autoload third party libraries
|
*/

require_once __DIR__ . '/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Process submit
|--------------------------------------------------------------------------
|
| Process submit from contact form
|
*/

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $errors = [];

    // Collect user input.
    $name = $_POST['name'] ?? '';
    $lastname = $_POST['lastname'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $note = $_POST['note'] ?? '';

    // Validate user input.
    if (empty($name)) {
        $errors['name'] = $lang[$currentLanguage]['validation']['name']['required'];
    }

    if (empty($lastname)) {
        $errors['lastname'] = $lang[$currentLanguage]['validation']['lastname']['required'];
    }

    if (empty($email)) {
        $errors['email'] = $lang[$currentLanguage]['validation']['email']['required'];
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = $lang[$currentLanguage]['validation']['email']['email'];
    }

    if (empty($note)) {
        $errors['note'] = $lang[$currentLanguage]['validation']['message']['required'];
    }

    // Do not check recaptcha in development environment.
    if (!$isDev) {
        $recaptchaResponse = $_POST['recaptcha_response'];

        // Check for spam.
        $recaptcha = new \ReCaptcha\ReCaptcha($googleRecaptchaSecret);
        $resp = $recaptcha->setExpectedHostname('projektewa.sk')
            ->verify($recaptchaResponse, $_SERVER['REMOTE_ADDR']);

        if (!$resp->isSuccess()) {
            $errors['recaptcha'] = $lang[$currentLanguage]['validation']['recaptcha'];
        }

        // If there are errors, return errors.
        if (!empty($errors)) {
            throw new Exception('Wrong captcha code');
            exit;
        }
    }

    // If there are no errors, send email.
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->SMTPDebug = PHPMailer\PHPMailer\SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->SMTPAuth   = true;
    $mail->Host = $smtp['host'];
    $mail->Username = $smtp['username'];
    $mail->Password = $smtp['password'];
    $mail->Port = $smtp['port'] ?? 465;
    $mail->SMTPSecure = $smtp['secure'] ?? 'tls';
    $mail->CharSet = "UTF-8";
    $mail->Encoding = 'base64';

    $mail->isHTML(true);
    $mail->setFrom($from);
    $mail->addAddress($to);

    $mail->Subject = $subject;
    $mail->Body =
        "<strong>Meno:</strong> $name <br>
        <strong>Priezvisko:</strong> $lastname <br>
        <strong>Email:</strong> $email <br>
        <strong>Telefón:</strong> $phone <br>
        <strong>Správa:</strong> $note";

    try {
        $response = $mail->send();
        header('Location: /kontakt.html');
    } catch (Exception $e) {
        header('Location: /kontakt.html');
        exit;
    }
}