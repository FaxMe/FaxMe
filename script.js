// Add additional functionality for form validation or other tasks
document.addEventListener('DOMContentLoaded', function () {
    const faxForm = document.getElementById('faxForm');
    faxForm.addEventListener('submit', function (event) {
        // Example validation (can be expanded as needed)
        const senderEmail = document.getElementById('sender-email').value;
        if (!senderEmail) {
            alert('Please enter a sender email!');
            event.preventDefault();  // Prevent form submission if validation fails
        }
    });
});
