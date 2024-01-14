const nav = document.getElementById("nav");
const main = document.getElementById("main");
function style(element, classname, state) { element.classList[state ? 'add' : 'remove'](classname); }

addEventListener("scroll", event => {
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    style(nav, "nav_opaque", (scrollY > 50));

    // Parallax
    main.style.backgroundPositionY = `-${scrollY/3}px`;
});
