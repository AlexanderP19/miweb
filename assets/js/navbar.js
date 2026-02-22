const bars = document.querySelector('.bars');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

bars.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !bars.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

const sidebarTop = sidebar.offsetTop;

window.addEventListener("scroll", () => {

    if (window.scrollY >= sidebarTop) {
        sidebar.classList.add("fixed");
    } else {
        sidebar.classList.remove("fixed");
    }

});

