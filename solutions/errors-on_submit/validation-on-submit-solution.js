document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
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

    // Function to show an error message and set aria attributes
    function showError(input, errorContainer, errorMessage) {
        errorContainer.innerHTML = `<p class="errorContainer">${errorMessage}</p>`;
        errorContainer.setAttribute('aria-live', 'assertive');
        input.setAttribute('aria-invalid', 'true');
    }

    // Function to clear the error message and aria attributes
    function clearError(input, errorContainer) {
        errorContainer.innerHTML = "";
        input.removeAttribute('aria-invalid');
        errorContainer.removeAttribute('aria-live');
    }

    // Validate each input on blur (when the user leaves the field)
    firstNameInput.addEventListener('blur', () => {
        if (!firstNameInput.validity.valid) {
            showError(firstNameInput, firstNameErrorContainer, firstNameErrorText);
        } else {
            clearError(firstNameInput, firstNameErrorContainer);
        }
    });

    lastNameInput.addEventListener('blur', () => {
        if (!lastNameInput.validity.valid) {
            showError(lastNameInput, lastNameErrorContainer, lastNameErrorText);
        } else {
            clearError(lastNameInput, lastNameErrorContainer);
        }
    });

    dateInput.addEventListener('blur', () => {
        if (!dateInput.validity.valid) {
            showError(dateInput, dateErrorContainer, dateErrorText);
        } else {
            clearError(dateInput, dateErrorContainer);
        }
    });

    // Form validation on submit
    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Check each field
        if (!firstNameInput.validity.valid) {
            showError(firstNameInput, firstNameErrorContainer, firstNameErrorText);
            isValid = false;
        }
        if (!lastNameInput.validity.valid) {
            showError(lastNameInput, lastNameErrorContainer, lastNameErrorText);
            isValid = false;
        }
        if (!dateInput.validity.valid) {
            showError(dateInput, dateErrorContainer, dateErrorText);
            isValid = false;
        }

        // Prevent form submission if any field is invalid
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Form successfully submitted");
        }
    });
});
