// Burger menu
var burgerMenu = document.getElementById("burger-menu");
var mobileMenu = document.getElementById("mobile-menu");

burgerMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    burgerMenu.classList.toggle("close");
});

// Language switch button
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

// Collapsible elements

var collapsibles = document.querySelectorAll("[data-collapse]");

collapsibles.forEach(function (collapsible) {
    collapsible.addEventListener("click", function (event) {
        event.preventDefault();

        var target = document.querySelector(
            collapsible.getAttribute("data-collapse"),
        );

        target.classList.toggle("hidden");
    });
});
