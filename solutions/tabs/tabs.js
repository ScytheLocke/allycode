//TODO Add functionality to hide previous tabpanel
document.addEventListener("DOMContentLoaded", function () {
    const tabList = document.querySelector(".tabList");
    const tabs = tabList.querySelectorAll('.tab');
    const tabsArray = Array.from(tabs);       

    // Deselect the previous tab, focus the next.
    const selectElement = (element) => {
        document.activeElement.setAttribute("tabindex", -1);
        document.activeElement.setAttribute("aria-selected", false);
        element.focus();
        element.setAttribute("tabindex", 0);
        element.setAttribute("aria-selected", true);
    };

    // Tab keyboard nav/focus management
    tabList.addEventListener("keydown", (event) => {
        const currentElement = event.target;
        const currentElementIndex = tabsArray.indexOf(currentElement);
        const nextElementIndex = currentElementIndex === tabsArray.length - 1 ? 0 : currentElementIndex + 1;
        const nextElement = tabsArray[nextElementIndex];
        const nextTabPanelToShow = nextElement.getAttribute('aria-controls');
        const previousElementIndex = currentElementIndex === 0 ? tabsArray.length - 1 : currentElementIndex - 1;
        const previousElement = tabsArray[previousElementIndex];
        const previousTabpanelToShow = previousElement.getAttribute('aria-controls')
     
        const currentTab = currentElement.getAttribute('aria-controls');
        console.log("hi" + currentElement.getAttribute('id'));
        const currentTabpanel = document.getElementById(currentTab);
        if (event.key === "ArrowRight") {
            let tabpanelToShow = document.getElementById(nextTabPanelToShow);
            selectElement(nextElement);
            tabpanelToShow.classList.remove("tabpanelHidden");
            tabpanelToShow.classList.add("tabpanelVisible");
            currentTabpanel.classList.add("tabpanelHidden");
        } else if (event.key === "ArrowLeft") {
            let tabpanelToShow = document.getElementById(previousTabpanelToShow);
            selectElement(previousElement);
            tabpanelToShow.classList.remove("tabpanelHidden");
            tabpanelToShow.classList.add("tabpanelVisible");
            currentTabpanel.classList.add("tabpanelHidden");
        }
    }, true);
});