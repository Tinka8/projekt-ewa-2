# Projekt EWA

## run project

```sh
yarn
```

Dev environment runs on localhost:5713 by default.

```sh
yarn dev
```

## build project

All built files are in the `dist` folder.

```sh
yarn build
```

## PHP dependencies

```sh
composer install
```

## Settings

| Setting                 | Description                 | File             |
| ----------------------- | --------------------------- | ---------------- |
| `GRECAPTCHA_SECRET_KEY` | Google Recaptcha secret key | dist/kontakt.php |
| `GRECAPTCHA_SITE_KEY`   | Google Recaptcha site key   | src/kontakt.html |
