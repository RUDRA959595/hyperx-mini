// ==============================
// SMOOTH SCROLLING
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ==============================
// SCROLL ANIMATIONS
// ==============================

const elements = document.querySelectorAll(
    ".card, .price-card, .hero-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.2
    }
);

elements.forEach(function (element) {
    observer.observe(element);
});


// ==============================
// ANIMATION CSS
// ==============================

const style = document.createElement("style");

style.textContent = `
.card,
.price-card,
.hero-card {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.card.show,
.price-card.show,
.hero-card.show {
    opacity: 1;
    transform: translateY(0);
}
`;

document.head.appendChild(style);


// ==============================
// WHATSAPP CONTACT FORM
// ==============================

const form = document.querySelector("#contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const business = document.querySelector("#business").value.trim();
        const plan = document.querySelector("#plan").value;
        const details = document.querySelector("#details").value.trim();

        const message =
            "Hello HyperX Mini!\n\n" +
            "New Project Enquiry\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Business: " + business + "\n" +
            "Selected Plan: " + plan + "\n\n" +
            "Project Details:\n" +
            details;

        const whatsappURL =
            "https://wa.me/918726601795?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

        window.location.href = "success.html";
    });
}
// ==============================
// PLAN BUTTONS
// ==============================

document.querySelectorAll("[data-plan]").forEach(function (button) {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        const selectedPlan = this.getAttribute("data-plan");

        const planSelect = document.querySelector("#plan");
        const contactForm = document.querySelector("#contactForm");

        if (planSelect) {
            planSelect.value = selectedPlan;
        }

        if (contactForm) {
            contactForm.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

    });

});
// ==============================
// ALL PLAN / SERVICE BUTTONS
// ==============================

document.querySelectorAll("a, button").forEach(function (button) {

    const text = button.textContent.trim().toLowerCase();

    let plan = "";

    if (text.includes("qr menu")) {
        plan = "QR Menu - ₹500";
    } 
    else if (text.includes("website")) {
        plan = "Website";
    } 
    else if (text.includes("editing")) {
        plan = "Video Editing";
    }

    if (plan) {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const planSelect = document.querySelector("#plan");
            const contact = document.querySelector("#contact");

            if (planSelect) {
                planSelect.value = plan;
            }

            if (contact) {
                contact.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

        });

    }

});