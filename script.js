
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

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const contactFeedback = document.getElementById("contactFeedback");

        if (!name || !email || !message) {
            event.preventDefault();

            if (contactFeedback) {
                contactFeedback.textContent =
                    "Please complete all fields before sending.";
                contactFeedback.className = "form-feedback error";
            }

            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            event.preventDefault();

            if (contactFeedback) {
                contactFeedback.textContent =
                    "Please enter a valid email address.";
                contactFeedback.className = "form-feedback error";
            }

            return;
        }

        // Allow the valid form to submit to FormSubmit.
        const submitButton = contactForm.querySelector('button[type="submit"]');

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }
    });
}
