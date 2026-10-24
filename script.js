
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
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();
        const feedback = document.getElementById("contactFeedback");
        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        if (!name || !email || !message) {
            if (feedback) {
                feedback.textContent = "Please fill in all fields.";
                feedback.className = "form-feedback error";
            }
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            if (feedback) {
                feedback.textContent = "Please enter a valid email address.";
                feedback.className = "form-feedback error";
            }
            return;
        }

        if (feedback) {
            feedback.textContent = "Message sent successfully! Thank you for contacting me.";
            feedback.className = "form-feedback success";
        }

        contactForm.reset();

        if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Message <span>↗</span>';
        }
    });
}
