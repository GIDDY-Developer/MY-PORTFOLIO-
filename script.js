```javascript
// =============================
// MOBILE NAVIGATION MENU
// =============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});


// Close the mobile menu after clicking a navigation link.

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// =============================
// DARK MODE
// =============================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Restore the user's saved theme.

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.className = "fas fa-sun";
}

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    themeIcon.className = isDarkMode
        ? "fas fa-sun"
        : "fas fa-moon";

    localStorage.setItem(
        "portfolioTheme",
        isDarkMode ? "dark" : "light"
    );
});


// =============================
// AUTOMATIC FOOTER YEAR
// =============================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// =============================
// CONTACT FORM
// =============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please complete all the fields.";
        return;
    }

    // This demo does not send or store messages.
    // Open the visitor's email application with a prepared message.

    const recipient = "your-email@example.com";

    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message
    );

    formMessage.textContent =
        "Opening your email application. Please send the prepared message.";

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + emailSubject +
        "&body=" + emailBody;
});
```
