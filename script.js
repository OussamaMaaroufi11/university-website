"use strict";

const navLinks = document.getElementById("navLinks");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");

function showMenu() {
    if (!navLinks || !menuOpen) {
        return;
    }

    navLinks.classList.add("nav-open");
    menuOpen.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-is-open");
}

function hideMenu() {
    if (!navLinks || !menuOpen) {
        return;
    }

    navLinks.classList.remove("nav-open");
    menuOpen.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-is-open");
}

if (menuOpen) {
    menuOpen.addEventListener("click", showMenu);
}

if (menuClose) {
    menuClose.addEventListener("click", hideMenu);
}

if (navLinks) {
    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", hideMenu);
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        hideMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        hideMenu();
    }
});

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}