// initializing the DOM
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const submitInput = document.getElementById("submit");
    const firstNameInput = document.getElementById("firstName");
    const firstNameErrorContainer = document.getElementById("firstNameError");
    // Solution: updated the error text to be more descriptive
    const firstNameErrorText = "Please provide the camper's first name";
    const lastNameInput = document.getElementById("lastName");
    const lastNameErrorContainer = document.getElementById("lastNameError");
    // Solution: updated the error text to be more descriptive
    const lastNameErrorText = "Please provide the camper's last name";
    const dateInput = document.getElementById("birthday");
    const dateErrorContainer = document.getElementById("dateError");
    // Solution: updated the error text to be more descriptive
    const dateErrorText = "Please provide the camper's birthday";

    // Display error message for errant field(s)
    showError = (errorContainer, errorMessage) => {
        errorContainer.innerHTML = `<p class="errorContainer">${errorMessage}</p>`
    }

    firstNameInput.addEventListener("blur", () => {
        if(!firstNameInput.validity.valid){
            showError(firstNameErrorContainer, firstNameErrorText)
        } else if (firstNameInput.validity.valid){
            firstNameErrorContainer.innerHTML = "";
        }
    })

    lastNameInput.addEventListener("blur", () => {
        if(!lastNameInput.validity.valid){
            showError(lastNameErrorContainer, lastNameErrorText)
        } else if(lastNameInput.validity.valid){
            lastNameErrorContainer.innerHTML = "";
        }
    })

    dateInput.addEventListener("blur", () => {
        if(!dateInput.validity.valid){
            showError(dateErrorContainer, dateErrorText)
        } else if(dateInput.validity.valid){
            dateErrorContainer.innerHTML = "";
        }
    })

    form.addEventListener("submit", (event) => {        
        if (firstNameInput.validity.valid && lastNameInput.validity.valid && dateInput.validity.valid) {
            alert("form successfully submitted")
        } else {
            event.preventDefault();
            alert("please fix the form errors")
            showError(firstNameErrorContainer, firstNameErrorText);
            showError(lastNameErrorContainer, lastNameErrorText); 
            showError(dateErrorContainer, dateErrorText);
        }
    });
}); 


