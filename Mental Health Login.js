document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (can be expanded)
    if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Mock login (Replace with real backend integration)
    if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful! Redirecting...');
        window.location.href = 'index.html'; // Redirect to the home page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
