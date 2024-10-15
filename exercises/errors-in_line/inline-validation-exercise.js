// initializing the DOM
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const submitInput = document.getElementById("submit");
    const firstNameInput = document.getElementById("firstName");
    const firstNameErrorContainer = document.getElementById("firstNameError");
    const firstNameErrorText = "Error";
    const lastNameInput = document.getElementById("lastName");
    const lastNameErrorContainer = document.getElementById("lastNameError");
    const lastNameErrorText = "Error";
    const dateInput = document.getElementById("birthday");
    const dateErrorContainer = document.getElementById("dateError");
    const dateErrorText = "Error";

    // Display error message for errant field(s)
    showError = (errorContainer, errorMessage) => {
        errorContainer.innerHTML = `<p class="errorContainer">${errorMessage}</p>`
    }

    firstNameInput.addEventListener("blur", () => {
        if(!firstNameInput.validity.valid){
            showError(firstNameErrorContainer, firstNameErrorText)
        } else if(firstNameInput.validity.valid){
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
11      } else {
        event.preventDefault()
            showError(firstNameErrorContainer, firstNameErrorText);
            showError(lastNameErrorContainer, lastNameErrorText); 
            showError(dateErrorContainer, dateErrorText);
            alert('please update all fields with errors')
        }
    });
}); 


