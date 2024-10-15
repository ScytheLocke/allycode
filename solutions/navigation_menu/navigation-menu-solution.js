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

    // Solution: Add aria-current to currently active nav link, CSS hooks into this attribute to apply a style to the current page
    navLinks.forEach(link => {
        if(link.href === window.location.href){
            link.setAttribute("aria-current", "page")
        }
    })

    // Solution: Hamburger Button toggle hide/show in CSS and add aria-expanded states of true/false
    hamburgerButton.addEventListener("click", toggleMenu = () => {
        mobileNavigation.classList.toggle("showMobileNavigation");
        const expandedState = hamburgerButton.getAttribute("aria-expanded");
        if(expandedState == "false"){
            hamburgerButton.setAttribute("aria-expanded", "true")
        } else if (expandedState == "true"){
            hamburgerButton.setAttribute("aria-expanded", "false")
        }
    });

    //Solution:  When the subMenu is closed remove the showSubMenu class in the CSS
    const closeSubMenu = () => {
        subMenuList.classList.remove("showSubMenu");
        arrow.classList.remove("arrowUp");
        arrow.classList.add("arrowDown");
    }

    // Solution:  When the mobileSubMenu is closed remove the showMobileSubMenu class in the CSS
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


    //  Solution: subMenu toggle hide/show in CSS and add aria-expanded states of true/false
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

    //  Solution: mobileSubmenu toggle hide/show in CSS and add aria-expanded states of true/false
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


