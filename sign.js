
        // Enable the Sign Up button only when both fields are filled
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const signupButton = document.getElementById('signupButton');

        function validateForm() {
            if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
                signupButton.disabled = false;
            } else {
                signupButton.disabled = true;
            }
        }

        emailInput.addEventListener('input', validateForm);
        passwordInput.addEventListener('input', validateForm);

        // Handle form submission
        const signupForm = document.getElementById('signupForm');
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = emailInput.value;
            const password = passwordInput.value;

            try {
                const response = await fetch('http://localhost:3000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const result = await response.json();
                if (response.ok) {
                    alert('User created successfully');
                    window.location.href = 'route.html'; // Redirect to route.html after successful signup
                } else {
                    alert(result.message || 'Error creating user');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error with the signup process.');
            }
        });
