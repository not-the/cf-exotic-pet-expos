const body = document.body,
nav = document.getElementById("nav"),
main = document.getElementById("main"),
backdrop = document.getElementById("backdrop"),
menu_button = document.getElementById("menu_button");
function style(element, classname, state) { element.classList[state ? 'add' : 'remove'](classname); }

// Menu
function menu(event, close=false) {
    if(close) body.classList.remove('show_menu');
    else body.classList.toggle('show_menu');
}

// Event listeners
document.querySelectorAll('#nav .nav_list a').forEach(element => element.addEventListener('click', () => menu(undefined, true)));
menu_button.addEventListener("click", menu);
backdrop.addEventListener("click", menu);

// On scroll
function scrollHandler(event) {
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    style(nav, "nav_opaque", (scrollY > 50));

    // Parallax
    main.style.backgroundPositionY = `${scrollY/2}px`;
}
addEventListener("scroll", scrollHandler);
