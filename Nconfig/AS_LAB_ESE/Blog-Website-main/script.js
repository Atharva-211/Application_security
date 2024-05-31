const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate username
    if (usernameInput.value.trim() === '') {
        alert('Please enter a username');
        return;
    }

    // Validate password
    if (passwordInput.value.trim() === '') {
        alert('Please enter a password');
        return;
    }

    // Validate email
    if (emailInput.value.trim() === '') {
        alert('Please enter an email');
        return;
    }

    // If all validations pass, you can proceed with form submission
    // Replace the following line with your actual form submission logic
    
});