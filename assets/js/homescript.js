document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the values of the input fields
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Hardcoded admin credentials
        const adminEmail = "admin@example.com";
        const adminPassword = "admin123";

        console.log("Email: ", email);  // For debugging
        console.log("Password: ", password);  // For debugging

        // Validate the email and password
        if (email === adminEmail && password === adminPassword) {
            console.log("Login successful, redirecting..."); 
            // Redirect to the home page
            window.location.href = "home.html"; 
        } else {
            // Show error message
            console.log("Invalid credentials"); // For debugging
            document.getElementById("error-message").style.display = "block";
        }
    });
});
