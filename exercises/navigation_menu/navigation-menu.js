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

    // 2. Use this function (or write your own) to manage the expanded/collapsed state for the desktop sub-menu
    subMenuButton.addEventListener("click", toggleSubMenu = () => {
        arrow.classList.toggle("arrowUp");
        subMenuList.classList.toggle("showSubMenu");
        // const expandedState = subMenuButton.getAttribute(ARIA goes here);
        // if(expandedState == "false"){
        //     subMenuButton.setAttribute(ARIA goes here)
        // } else if (expandedState == "true"){
        //     subMenuButton.setAttribute(ARIA goes here)
        // }
    })


     // 3. Use this function (or write your own) to manage the expanded/collapsed state for the hamburger menu button
     hamburgerButton.addEventListener("click", toggleMenu = () => {
        mobileNavigation.classList.toggle("showMobileNavigation");
        // const expandedState = hamburgerButton.getAttribute(ARIA goes here);
        // if(expandedState == "false"){
        //     hamburgerButton.setAttribute(ARIA goes here)
        // } else if (expandedState == "true"){
        //     hamburgerButton.setAttribute(ARIA goes here)
        // }
    });


    // 3. Use this function (or write your own) to manage the expanded/collapsed state for the mobile sub-menu    

    mobileSubMenuButton.addEventListener("click", toggleSubMenu = () => {
        arrow.classList.toggle("arrowUp");
        mobileSubMenuList.classList.toggle("showMobileSubMenu");
        // const expandedState = mobileSubMenuButton.getAttribute(ARIA goes here);
        // if(expandedState == "false"){
        //     mobileSubMenuButton.setAttribute(ARIA goes here)
        // } else if (expandedState == "true"){
        //     mobileSubMenuButton.setAttribute(ARIA goes here)
        // }
    })

    // 4. Use this function (or write your own) to add an aria-attribute that would designate the current page
    // navLinks.forEach(link => {
    //     if(link.href === window.location.href){
    //         // link.setAttribute(ARIA goes here)
    //     }
    // })


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

}); 


