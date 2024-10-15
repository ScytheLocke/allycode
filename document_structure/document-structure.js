// initializing the DOM
document.addEventListener("DOMContentLoaded", function() {
    const mobileNavigation = document.getElementById("mobileNavigation");
    const hamburgerButton = document.getElementById("hamburgerBtn");
    const subMenuButton = document.getElementById("subMenuTrigger");
    const subMenuList = document.getElementById("subMenu");
    const mobileSubMenuButton = document.getElementById("mobileSubMenuTrigger");
    const mobileSubMenuList = document.getElementById("mobileSubMenu")
    const arrow = document.getElementById("arrow");
    const navLinks = document.querySelectorAll(".navLink");

    // Add aria-current to currently active nav link
    navLinks.forEach(link => {
        if(link.href === window.location.href){
            link.setAttribute("aria-current", "page")
        }
    })

    // Hamburger Button toggle hide/show + aria-expanded
    hamburgerButton.addEventListener("click", toggleMenu = () => {
        mobileNavigation.classList.toggle("showMobileNavigation");
        const expandedState = hamburgerButton.getAttribute("aria-expanded");
        if(expandedState == "false"){
            hamburgerButton.setAttribute("aria-expanded", "true")
        } else if (expandedState == "true"){
            hamburgerButton.setAttribute("aria-expanded", "false")
        }
    });

    // close the submenu and reverse the arrow direction
    const closeSubMenu = () => {
        subMenuList.classList.remove("showSubMenu");
        arrow.classList.remove("arrowUp");
        arrow.classList.add("arrowDown");
    }

    // Close the mobile sub menu
   const closeMobileSubMenu = () => {
        mobileSubMenuList.classList.remove("showMobileSubMenu");
        arrow.classList.remove("arrowUp");
        arrow.classList.add("arrowDown");
    }

    // Listen for currently focused element, if it's not the submenu or sibling close the submenu
    document.addEventListener('focusin', function() {
        const focusedElement = document.activeElement;
        const focusedElementClass = focusedElement.classList;

        if(!((focusedElementClass.contains("subMenuLink")) || (focusedElementClass.contains("subMenuLinkSibling"))) ){
            closeSubMenu();
            closeMobileSubMenu();
        }

        }, true);

    // Closes sub menu when escape is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeSubMenu()
            closeMobileSubMenu();
        }
    });


    // Sub-menu button toggle hide/show + aria-expanded
    subMenuButton.addEventListener("click", toggleSubMenu = () => {
        arrow.classList.toggle("arrowUp");
        subMenuList.classList.toggle("showSubMenu");
        const expandedState = subMenuButton.getAttribute("aria-expanded");
        if(expandedState == "false"){
            subMenuButton.setAttribute("aria-expanded", "true")
        } else if (expandedState == "true"){
            subMenuButton.setAttribute("aria-expanded", "false")
        }
    })

    // Mobile sub-menu button toggle hide/show + aria-expanded
    mobileSubMenuButton.addEventListener("click", toggleSubMenu = () => {
        arrow.classList.toggle("arrowUp");
        mobileSubMenuList.classList.toggle("showMobileSubMenu");
        const expandedState = mobileSubMenuButton.getAttribute("aria-expanded");
        if(expandedState == "false"){
            mobileSubMenuButton.setAttribute("aria-expanded", "true")
        } else if (expandedState == "true"){
            mobileSubMenuButton.setAttribute("aria-expanded", "false")
        }
    })
}); 


