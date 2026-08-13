// =========================================================
// HYPERX MINI — MAIN JAVASCRIPT
// =========================================================


// =========================================================
// 1. SMOOTH SCROLLING
// =========================================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        const target = document.querySelector(href);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// =========================================================
// 2. SCROLL REVEAL ANIMATIONS
// =========================================================

const revealElements = document.querySelectorAll(
    ".card, .pricing-card, .step-card, .about-box, .hero-card, .contact-form"
);


const revealStyle = document.createElement("style");

revealStyle.textContent = `

.reveal-ready {
    opacity: 0;
    transform: translateY(28px);
    transition:
        opacity 0.65s ease,
        transform 0.65s ease;
}

.reveal-ready.show {
    opacity: 1;
    transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {

    .reveal-ready {
        opacity: 1;
        transform: none;
        transition: none;
    }

}

`;

document.head.appendChild(revealStyle);


revealElements.forEach((element) => {
    element.classList.add("reveal-ready");
});


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("show");
    });

}


// =========================================================
// 3. PLAN SELECTION
// =========================================================

const planButtons =
    document.querySelectorAll("[data-plan]");

const planInput =
    document.querySelector("#plan");

const contactForm =
    document.querySelector("#contactForm");


planButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedPlan =
            button.getAttribute("data-plan");

        if (planInput) {
            planInput.value = selectedPlan;
        }


        if (contactForm) {

            setTimeout(() => {

                contactForm.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 150);

        }

    });

});


// =========================================================
// 4. WHATSAPP CONTACT FORM
// =========================================================

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document.querySelector("#name")?.value.trim();

        const phone =
            document.querySelector("#phone")?.value.trim();

        const business =
            document.querySelector("#business")?.value.trim();

        const plan =
            document.querySelector("#plan")?.value.trim();

        const details =
            document.querySelector("#details")?.value.trim();


        // -----------------------------------------
        // VALIDATION
        // -----------------------------------------

        if (!name || !phone || !business || !details) {

            alert(
                "Please fill in all required fields."
            );

            return;

        }


        if (!plan) {

            alert(
                "Please select a service or plan first."
            );

            return;

        }


        // -----------------------------------------
        // WHATSAPP MESSAGE
        // -----------------------------------------

        const message =

            "Hello HyperX Mini! 👋\n\n" +

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

            "Selected Service: " +
            plan +
            "\n\n" +

            "*Project Details:*\n" +
            details;


        const whatsappURL =

            "https://wa.me/918726601795?text=" +

            encodeURIComponent(message);


        // -----------------------------------------
        // OPEN WHATSAPP
        // -----------------------------------------

        window.open(
            whatsappURL,
            "_blank"
        );


        // -----------------------------------------
        // SUCCESS PAGE
        // -----------------------------------------

        setTimeout(() => {

            window.location.href =
                "success.html";

        }, 700);

    });

}


// =========================================================
// 5. TERMS & CONDITIONS MODAL
// =========================================================

const termsModal =
    document.querySelector("#termsModal");

const openTerms =
    document.querySelector("#openTerms");

const closeTerms =
    document.querySelector("#closeTerms");

const closeTermsBottom =
    document.querySelector("#closeTermsBottom");


function openTermsModal() {

    if (!termsModal) return;

    termsModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeTermsModal() {

    if (!termsModal) return;

    termsModal.classList.remove("active");

    document.body.style.overflow = "";

}


// OPEN

if (openTerms) {

    openTerms.addEventListener(
        "click",
        openTermsModal
    );

}


// CLOSE X

if (closeTerms) {

    closeTerms.addEventListener(
        "click",
        closeTermsModal
    );

}


// CLOSE BUTTON

if (closeTermsBottom) {

    closeTermsBottom.addEventListener(
        "click",
        closeTermsModal
    );

}


// CLOSE OUTSIDE

if (termsModal) {

    termsModal.addEventListener("click", (event) => {

        if (event.target === termsModal) {

            closeTermsModal();

        }

    });

}


// =========================================================
// 6. ESC KEY
// =========================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeTermsModal();

    }

});


// =========================================================
// 7. BUTTON PRESS FEEDBACK
// =========================================================

document
    .querySelectorAll("button, .btn, .price-button")
    .forEach((button) => {

        button.addEventListener("click", () => {

            button.style.transform =
                "scale(0.97)";

            setTimeout(() => {

                button.style.transform = "";

            }, 120);

        });

    });


// =========================================================
// 8. CURRENT YEAR
// =========================================================

const footerText =
    document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} HyperX Mini — Helping Businesses Grow Digitally`;

}