// Get the form element
const form = document.getElementById('signup-form');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate the form data
    if (name && email && dateOfBirth && password && confirmPassword) {
        if (password === confirmPassword) {
            // Submit the form data to the server (e.g., using AJAX or fetch API)
            console.log('Form data submitted successfully!');
        } else {
            console.error('Passwords do not match!');
        }
    } else {
        console.error('Please fill out all the fields!');
    }
});