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

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el formulario de registro por su id
    document.getElementById("registro-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Redirige a la página MetodoPago.html
        window.location.href = "metodoPago.html";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#pago-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const inputs = document.querySelectorAll("#pago-form input[required]");
        let allFieldsFilled = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            console.log("Todos los campos están llenos. Redirigiendo a home.html...");
            window.location.href = "home.html"; // Redirige a la página de inicio
        } else {
            console.log("Por favor, completa todos los campos.");
            alert("Por favor, completa todos los campos antes de enviar.");
        }
    });
});
