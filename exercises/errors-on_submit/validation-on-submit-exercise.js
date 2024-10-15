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
    
    // Display arror message for errant field(s)
    showError = (errorContainer, errorMessage) => {
        errorContainer.innerHTML = `<p class="errorContainer">${errorMessage}</p>`
    }
    // Form validation on submit
    form.addEventListener("submit", (event) => {

        // all inputs are valid
        if (firstNameInput.validity.valid && lastNameInput.validity.valid && dateInput.validity.valid) {
            alert("form successfully submitted")
11      }

        // first name & last name valid, date invalid
        else if(firstNameInput.validity.valid && lastNameInput.validity.valid && !dateInput.validity.valid) {
            dateInput.focus();
            showError(dateErrorContainer, dateErrorText);
            dateInput.setAttribute('aria-invalid', "true");
            firstNameInput.removeAttribute('aria-invalid');
            lastNameInput.removeAttribute('aria-invalid');
            firstNameErrorContainer.innerHTML = "";
            lastNameErrorContainer.innerHTML = "";
            event.preventDefault();
        }

        // first name & date valid, last name invalid
        else if (firstNameInput.validity.valid && !lastNameInput.validity.valid && dateInput.validity.valid){
            lastNameInput.focus();
            showError(lastNameErrorContainer, lastNameErrorText);
            lastNameInput.setAttribute('aria-invalid', "true");
            firstNameInput.removeAttribute('aria-invalid');
            dateInput.removeAttribute('aria-invalid');
            firstNameErrorContainer.innerHTML = "";
            dateErrorContainer.innerHTML = "";
            event.preventDefault();
        }

        // first name valid, last name & date invalid
        else if (firstNameInput.validity.valid && !lastNameInput.validity.valid && !dateInput.validity.valid){
            lastNameInput.focus();
            showError(lastNameErrorContainer, lastNameErrorText);
            showError(dateErrorContainer, dateErrorText);
            lastNameInput.setAttribute('aria-invalid', "true");
            dateInput.setAttribute('aria-invalid', "true");
            firstNameInput.removeAttribute('aria-invalid');
            firstNameErrorContainer.innerHTML = "";
            event.preventDefault();
        }

        // first name invalid, last name & date valid
        else if (!firstNameInput.validity.valid && lastNameInput.validity.valid && dateInput.validity.valid){
            firstNameInput.focus();
            showError(firstNameErrorContainer, firstNameErrorText);
            firstNameInput.setAttribute('aria-invalid', "true");
            lastNameInput.removeAttribute('aria-invalid');
            dateInput.removeAttribute('aria-invalid');
            lastNameErrorContainer.innerHTML = "";
            dateErrorContainer.innerHTML = "";
            event.preventDefault();
        }

        // first name & date invalid, last name valid
        else if (!firstNameInput.validity.valid && lastNameInput.validity.valid && !dateInput.validity.valid){
            firstNameInput.focus();
            showError(firstNameErrorContainer, firstNameErrorText);
            showError(dateErrorContainer, dateErrorText);
            firstNameInput.setAttribute('aria-invalid', "true");
            dateInput.setAttribute('aria-invalid', "true");
            lastNameInput.removeAttribute('aria-invalid');
            lastNameErrorContainer.innerHTML = "";
            event.preventDefault();
        }

         // first name & last mame invalid, date valid
        else if (!firstNameInput.validity.valid && !lastNameInput.validity.valid && dateInput.validity.valid){
            firstNameInput.focus();
            showError(firstNameErrorContainer, firstNameErrorText);
            showError(lastNameErrorContainer, lastNameErrorText);
            firstNameInput.setAttribute('aria-invalid', "true");
            lastNameInput.setAttribute('aria-invalid', "true");
            dateInput.removeAttribute('aria-invalid');
            dateErrorContainer.innerHTML = "";
            event.preventDefault();
        }

        // first name, last name, date all invalid
        else if (!firstNameInput.validity.valid && !lastNameInput.validity.valid && !dateInput.validity.valid){
            firstNameInput.focus();
            showError(firstNameErrorContainer, firstNameErrorText);
            showError(lastNameErrorContainer, lastNameErrorText);
            showError(dateErrorContainer, dateErrorText);
            firstNameInput.setAttribute('aria-invalid', "true");
            lastNameInput.setAttribute('aria-invalid', "true");
            dateInput.setAttribute('aria-invalid', "true");
            event.preventDefault();
        }        
    });
}); 


