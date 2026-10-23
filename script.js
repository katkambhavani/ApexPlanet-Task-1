
/* ==============================
   1. Mobile navigation
============================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.textContent = "☰";
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            navLinks.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.textContent = "☰";
        }
    });
}

/* ==============================
   2. Automatic footer year
============================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

/* ==============================
   3. Contact form validation
============================== */

const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");

if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        contactFeedback.className = "form-feedback";

        if (!name || !email || !message) {
            contactFeedback.textContent =
                "Please complete all fields before continuing.";
            contactFeedback.classList.add("error");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            contactFeedback.textContent =
                "Please enter a valid email address.";
            contactFeedback.classList.add("error");
            return;
        }

        contactFeedback.textContent =
            "Validation successful! This demo does not send or store your message.";
        contactFeedback.classList.add("success");
    });
}
