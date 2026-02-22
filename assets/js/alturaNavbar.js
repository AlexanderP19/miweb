const header = document.querySelector("header");
const sidebar = document.querySelector(".sidebar");

let lastScroll = 0;
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > headerHeight) {
        // Scroll hacia abajo → ocultar header
        header.style.marginTop = `-${headerHeight}px`;
        sidebar.style.top = "0px";
        sidebar.style.height = "100vh";
    } else {
        // Scroll hacia arriba → mostrar header
        header.style.marginTop = "0px";
        sidebar.style.top = `${headerHeight}px`;
        sidebar.style.height = `calc(100vh - ${headerHeight}px)`;
    }

    lastScroll = currentScroll;
});