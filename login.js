
// Enable the Login button only when both fields are filled
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateForm() {
    let valid = true;

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('input-error');
        valid = false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
    }

    // Validate password
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordInput.classList.add('input-error');
        valid = false;
    } else {
        passwordError.textContent = '';
        passwordInput.classList.remove('input-error');
    }

    loginButton.disabled = !valid;
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

// Handle form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
 
    const email = emailInput.value;
    const password = passwordInput.value;

    console.log('Attempting to log in with:', { email, password }); // Debugging

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        console.log('Response received:', response);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Login failed:', errorData.message);
            alert(errorData.message || 'Invalid credentials');
            return;
        }

        const result = await response.json();
        console.log('Result:', result);

        if (result.success) {
            console.log('Login successful, redirecting to route.html');
            window.location.href = 'route.html'; // Redirect after login
        } else {
            alert(result.message || 'Invalid credentials');
        }
    } catch (error) {
        console.error('Error during login request:', error);
        alert('There was an error with the login process.');
    }
});
