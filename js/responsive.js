function toggleNavMenu() {
    var menuToggle = document.getElementById('menu-toggle');
    var navbar = document.getElementById('navbar');
    menuToggle.onclick = function() {
        navbar.classList.toggle('open');
    };

    var navLinks = document.querySelectorAll('.nav_links > li > a');
    navLinks.forEach(function(link) {
        link.onclick = function(e) {
            if (window.innerWidth <= 900) {
                var subMenu = this.nextElementSibling;
                if (subMenu && subMenu.classList.contains('sub_menu')) {
                    e.preventDefault();
                    subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';
                }
            }
        };
    });
}
toggleNavMenu();