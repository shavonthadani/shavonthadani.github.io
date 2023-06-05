document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("btnSend").addEventListener("click", function (event) {
        var contactName = document.getElementById("contactName").value;
        var contactEmail = document.getElementById("contactEmail").value;
        var contactText = document.getElementById("contactText").value;
        var contactSubject = document.getElementById("contactSubject").value;

        if (contactEmail === "" || contactName === "" || contactSubject === "") {
            document.getElementById("alertContact").classList.remove("d-none"); // Show the alert
            document.getElementById("alertContactSuccess").classList.add("d-none");
            event.preventDefault();
        }
        else {
            document.getElementById("alertContactSuccess").classList.remove("d-none"); // Show the alert
            document.getElementById("alertContact").classList.add("d-none"); // Show the alert
        }
    });
    document.getElementById("submit").addEventListener("click", function (event) {
        var firstName = document.getElementById("inputFirst").value;
        var lastName = document.getElementById("inputLast").value;
        var email = document.getElementById("inputEmail").value;
        var phone = document.getElementById("inputPhone").value;
        var breed = document.getElementById("inputBreed").value;
        var dogSize = document.getElementById("inputDogSize").value;
        var service = document.getElementById("inputService").value;
        var expert = document.getElementById("inputExpert").value;
        var date = document.getElementById("datepicker").value;
        var time = document.getElementById("default-picker").value;
        var comments = document.getElementById("comments").value;
        if (firstName === "" || lastName === "" || email === "" || phone === "" || breed === "" || dogSize === "" || service === "" || expert === "" || date === "" || time === "") {
            document.getElementById("alert").classList.remove("d-none"); // Show the alert
            event.preventDefault();
        } else {
            // Initialize the existing modal
            var bookingModal = document.getElementById('bookingModal');
            var bootstrapbookingModal = bootstrap.Modal.getInstance(bookingModal);

            // Close the existing modal

            //Update confirmation modal content
            bootstrapbookingModal.hide();
            document.getElementById("confirmFirstName").value = firstName;
            document.getElementById("confirmLastName").value = lastName;
            document.getElementById("confirmEmail").value = email;
            document.getElementById("confirmPhone").value = phone;
            document.getElementById("confirmBreed").value = breed;
            document.getElementById("confirmDogSize").value = dogSize;
            document.getElementById("confirmService").value = service;
            document.getElementById("confirmExpert").value = expert;
            document.getElementById("confirmDate").value = date;
            document.getElementById("confirmTime").value = time;
            document.getElementById("confirmComments").value = comments;

            // Initialize the confirmation modal
            var confirmModalElem = document.getElementById('confirmModal');
            var confirmModal = new bootstrap.Modal(confirmModalElem, {
                keyboard: false // Optional parameter
            });

            // Show the confirmation modal
            confirmModal.show();

            // Handle confirmation modal close event
            confirmModalElem.addEventListener('hidden.bs.modal', function (event) {
                // Remove modal-open class from body
                document.body.classList.remove('modal-open');
                // Remove leftover modal backdrops
                const modalBackdrops = document.getElementsByClassName('modal-backdrop');
                while (modalBackdrops.length > 0) {
                    modalBackdrops[0].parentNode.removeChild(modalBackdrops[0]);
                }
            });
        }
    });
});
