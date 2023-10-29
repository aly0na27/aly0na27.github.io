const nav = document.querySelector(".header__nav");
const section1 = document.querySelector("#section1");
const section1Coords = section1.getBoundingClientRect();
const btnNightTheme = document.querySelector(".btn__night-theme");
const allSections = document.querySelectorAll(".section");
const allSectionsArray = Array.from(allSections);
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".nav__link");
const darkMode = document.querySelector(".btn__night-theme")

// Sticky Nav
window.addEventListener('scroll', () => {

    console.log(window.scrollY);
    console.log(section1Coords);
    if (window.scrollY > section1Coords.top) {
        nav.classList.add("sticky");
        darkMode.classList.add("stickyBtn")
    } else {
        nav.classList.remove("sticky");
        darkMode.classList.remove("stickyBtn")

    }
});

//Smooth scroll

allSectionsArray.shift();

const appearanceSection = function (entries, observer) {
    const entry = entries[0];
    console.log(entry);
    if (entry.isIntersecting) {
        entry.target.classList.remove("section--hidden");
        observer.unobserve(entry.target)
    }
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
    root: null,
    threshold: 0.2,

});

allSectionsArray.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

document.querySelector(".nav__link").addEventListener("click", function (e) {
    if (e.target.classList.contains("nav__item-link")) {
        e.preventDefault();
        let href = e.target.getAttribute('href');
        document.querySelector(href).scrollIntoView({behavior: "smooth"});
        if (document.querySelector(".menu__icon").classList.contains("active")) {
            document.body.classList.remove("lock");
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
        }
    }
});

document.querySelector(".header__nav").addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("nav__item-link")) {
        const siblingLinks = e.target.closest(".nav__link").querySelectorAll(".nav__item-link");
        const logo = document.querySelector(".logo_text");
        siblingLinks.forEach(el => {
            if (el !== e.target) {
                el.style.opacity = (0.7).toString();

            }
        });
        logo.style.opacity = (1.6).toString();
    }
});

document.querySelector(".header__nav").addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("nav__item-link")) {
        const siblingLinks = e.target.closest(".nav__link").querySelectorAll(".nav__item-link");
        const logo = document.querySelector(".logo_text");
        siblingLinks.forEach(el => {
            if (el !== e.target) {
                el.style.opacity = (1).toString();
            }
        });
        logo.style.opacity = (1).toString();
    }
});

document.querySelector(".learn__more").addEventListener("click", function (e) {
    e.preventDefault();
    let href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({behavior: "smooth"});
})


// NavBar for mobile

iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
});

btnNightTheme.addEventListener("click", function () {
    if (btnNightTheme.classList.contains("activeBtn")) {
        document.documentElement.style.setProperty("--color-first", "#343131");
        document.documentElement.style.setProperty("--color-second", "#f0f0f0");
        document.documentElement.style.setProperty("--color-first-gradient", "rgba(183,182,182,0.9)");
        document.documentElement.style.setProperty("--background-image-first", "url('img/layered-waves-haikei(3)white.svg')");
        document.documentElement.style.setProperty("--background-image-second", "url('img/layered-waves-haikei(4)white.svg')");
        document.documentElement.style.setProperty("--background-image-third", "url('img/layered-waves-haikei(6)white.svg')");
        btnNightTheme.classList.toggle("activeBtn");
    } else {
        document.documentElement.style.setProperty("--color-first", "#f0f0f0");
        document.documentElement.style.setProperty("--color-second", "#0f0f0f");
        document.documentElement.style.setProperty("--color-first-gradient", "rgba(37, 35, 36, 0.66)");
        document.documentElement.style.setProperty("--background-image-first", "url('img/layered-waves-haikei (3).svg')");
        document.documentElement.style.setProperty("--background-image-second", "url('img/layered-waves-haikei (4).svg')");
        document.documentElement.style.setProperty("--background-image-third", "url('img/layered-waves-haikei (6).svg')");
        btnNightTheme.classList.toggle("activeBtn");
    }
})