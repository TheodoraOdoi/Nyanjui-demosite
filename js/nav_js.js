// JavaScript document for toggling the site's nav bar

// Add an event listener for the DomContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    // Toggle main, tablet and mobile nav
    menuToggle.addEventListener('click', () =>{
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    })

    // Toggle the submenus on mobile snd tablet devices to open one at a time
    const navItems = document.querySelectorAll('nav li');

    navItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            if(window.innerWidth < 800)
                { 
                    const submenu = item.querySelector('url');
                    const link = item.querySelector('a.has-submenu');

                    if(submenu)
                    {
                        Event.preventDefault();

                        // Close all other submenu
                        document.querySelectorAll('nav ul ul').forEach(ul => {
                            if(ul !== submenu) ul.classList.remove('active');
                        })

                        // Toggle current menu
                        submenu.classList.toggle('active');

                        // update aria-expanded
                        document.querySelectorAll('a.has-submenu').forEach(a =>{
                            a.setAttribute('aria-expanded', 'false');
                        })

                        if(link)
                        {
                            const isOpen = submenu.classList.contains('active');
                            link.setAttribute('aria-expanded', isOpen? 'true': 'false');
                        }
                    }
                }
        });
    });

    // Close everything when clicking outside the nav
    document.addEventListener('click',(event)=>{
        if (window.innerWidth < 800 && !event.target.closest('nav'))
        {
            document.querySelectorAll('nav ul ul').forEach(ul.classList.remove('active'));
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');

            document.querySelectorAll('a.has-submenu').forEach(a=>{
                a.setAttribute('aria-expanded', 'false');
            })
        }
    })
})