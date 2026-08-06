// HyperX Mini v2 JavaScript


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});





// Scroll animation


const elements = document.querySelectorAll(
".card, .price-card, .hero-card"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }


});


},
{
    threshold:0.2
});



elements.forEach(element=>{

    observer.observe(element);

});







// Add animation class


const style = document.createElement("style");


style.innerHTML = `


.card,
.price-card,
.hero-card{

    opacity:0;

    transform:translateY(40px);

    transition:0.7s;

}



.show{

    opacity:1;

    transform:translateY(0);

}



`;



document.head.appendChild(style);







// Form submit message


const form = document.querySelector("form");


if(form){


form.addEventListener("submit",()=>{


    setTimeout(()=>{


        alert(
        "Thank you! HyperX Mini will contact you soon."
        );


    },500);


});


}
