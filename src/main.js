// burger menu
var burgerMenu = document.getElementById("burger-menu");
var mobileMenu = document.getElementById("mobile-menu");

burgerMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    burgerMenu.classList.toggle("close");
});


// language switch button 
var languageSwitcherOpener = document.getElementById(
    "language-switcher-opener",
);

languageSwitcherOpener.addEventListener("click", function (event) {
    event.preventDefault();

    var languageSwitcher = document.getElementById("language-switcher");
    languageSwitcher.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
    var languageSwitcher = document.getElementById("language-switcher");
    if (
        !languageSwitcher.classList.contains("hidden") &&
        event.target !== languageSwitcher &&
        event.target !== languageSwitcherOpener
    ) {
        languageSwitcher.classList.add("hidden");
    }
});
