// ==============================
// HYPERX MINI - MAIN JAVASCRIPT
// ==============================


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
    ".card, .pricing-card, .hero-card"
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
        threshold: 0.15
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
.pricing-card,
.hero-card {

    opacity: 0;

    transform: translateY(40px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;

}

.card.show,
.pricing-card.show,
.hero-card.show {

    opacity: 1;

    transform: translateY(0);

}

`;

document.head.appendChild(style);


// ==============================
// PLAN BUTTONS
// ==============================

const planButtons =
    document.querySelectorAll("[data-plan]");


planButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedPlan =
            this.getAttribute("data-plan");

        const planInput =
            document.querySelector("#plan");

        const contactForm =
            document.querySelector("#contactForm");


        if (planInput) {

            planInput.value = selectedPlan;

        }


        if (contactForm) {

            setTimeout(function () {

                contactForm.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);

        }

    });

});


// ==============================
// WHATSAPP CONTACT FORM
// ==============================

const form =
    document.querySelector("#contactForm");


if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();


        const name =
            document.querySelector("#name").value.trim();

        const phone =
            document.querySelector("#phone").value.trim();

        const business =
            document.querySelector("#business").value.trim();

        const plan =
            document.querySelector("#plan").value.trim();

        const details =
            document.querySelector("#details").value.trim();


        // Check selected plan

        if (!plan) {

            alert("Please select a service or plan first.");

            return;

        }


        // WhatsApp message

        const message =

            "Hello HyperX Mini!\n\n" +

            "*New Project Enquiry*\n\n" +

            "Name: " +
            name +
            "\n" +

            "Phone: " +
            phone +
            "\n" +

            "Business: " +
            business +
            "\n" +

            "Selected Plan: " +
            plan +
            "\n\n" +

            "Project Details:\n" +
            details;


        const whatsappURL =

            "https://wa.me/918726601795?text=" +

            encodeURIComponent(message);


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank"
        );


        // Open success page

        setTimeout(function () {

            window.location.href =
                "success.html";

        }, 500);

    });

}


// ==============================
// TERMS & CONDITIONS MODAL
// ==============================

const termsModal =
    document.querySelector("#termsModal");

const openTerms =
    document.querySelector("#openTerms");

const closeTerms =
    document.querySelector("#closeTerms");

const closeTermsBottom =
    document.querySelector("#closeTermsBottom");


// OPEN

if (openTerms && termsModal) {

    openTerms.addEventListener("click", function () {

        termsModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}


// CLOSE - X BUTTON

if (closeTerms && termsModal) {

    closeTerms.addEventListener("click", function () {

        termsModal.classList.remove("active");

        document.body.style.overflow = "";

    });

}


// CLOSE - BOTTOM BUTTON

if (closeTermsBottom && termsModal) {

    closeTermsBottom.addEventListener("click", function () {

        termsModal.classList.remove("active");

        document.body.style.overflow = "";

    });

}


// CLOSE - CLICK OUTSIDE

if (termsModal) {

    termsModal.addEventListener("click", function (e) {

        if (e.target === termsModal) {

            termsModal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}


// CLOSE - ESC KEY

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape" && termsModal) {

        termsModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});