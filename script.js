
// script.js
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
  
    nameError.textContent = "";
    emailError.textContent = "";
  
    if (name === "") {
      nameError.textContent = "Name is required.";
      valid = false;
    }
    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = "Please enter a valid email.";
      valid = false;
    }
  
    if (valid) {
      alert("Form submitted successfully!");
      document.getElementById("contactForm").reset();
    }
  });
  
  const colors = ["coral", "lightgreen", "skyblue", "plum", "gold"];
  let currentColor = 0;
  document.getElementById("changeColorBtn").addEventListener("click", function() {
    currentColor = (currentColor + 1) % colors.length;
    document.getElementById("colorBox").style.backgroundColor = colors[currentColor];
  });
  