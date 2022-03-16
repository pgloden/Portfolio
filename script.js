let lightMode = document.getElementById('light-mode');
let navbar = document.querySelector('.navbar')
let navbarLink = document.getElementsByClassName('navbar-link')


// make a button for dark and light mode

function changeBackgroundColor() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    navbar.style.backgroundColor = 'white';
    navbarLink.style.color = 'black';
}

lightMode.addEventListener('click', changeBackgroundColor);
// enable hidden navbar 

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        navbar.classList.add("nav--hidden");
    } else {
        navbar.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
})