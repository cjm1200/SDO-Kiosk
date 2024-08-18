document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    // Replace these with your own validation logic
    const validUsername = "admin";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
      alert("Login successful");
      // Redirect to admin dashboard
      window.location.href = "settings.html";
    } else {
      alert("Invalid username or password");
    }
  });
