const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector('main');
const right=document.querySelector(".right-box")

function hideSidebar() {
    if (sidebar) {
        sidebar.style.transition = "all 0.3s";
        sidebar.style.display = "none";
        right.style.margin="auto"
        
    }
    // Move the menu button outside the sidebar
    main.prepend(menu);
    menu.removeEventListener("click", hideSidebar);
    menu.addEventListener("click", showSidebar);
}

// Function to show the sidebar and move the menu inside
function showSidebar() {
    if (sidebar) {
        sidebar.style.display = "";
    }
    // Move the menu button back inside the sidebar
    sidebar.prepend(menu);
    menu.removeEventListener("click", showSidebar);
    menu.addEventListener("click", hideSidebar);
}

// Initial setup
menu.addEventListener("click", hideSidebar);