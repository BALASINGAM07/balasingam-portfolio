/* =========================
   TYPING EFFECT
========================= */

const words = [
    "Software Developer",
    "Game Developer",
    "Video Editor",
    "Creative Designer",
    "ECE Graduate"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

    }else{

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

    }


    let speed = deleting ? 55 : 100;


    if(!deleting && charIndex > currentWord.length){

        deleting = true;

        speed = 1500;

    }


    if(deleting && charIndex < 0){

        deleting = false;

        charIndex = 0;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

    }


    setTimeout(typeEffect, speed);

}

typeEffect();



/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");


if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if(navMenu.classList.contains("active")){

            menuToggle.innerHTML =
                '<i class="fas fa-times"></i>';

        }else{

            menuToggle.innerHTML =
                '<i class="fas fa-bars"></i>';

        }

    });

}


/* Close mobile menu */

document
    .querySelectorAll("#nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.innerHTML =
                '<i class="fas fa-bars"></i>';

        });

    });



/* =========================
   NAVBAR SCROLL
========================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background =
            "rgba(5,6,8,.94)";

    }else{

        header.style.background =
            "rgba(5,6,8,.72)";

    }

});



/* =========================
   SCROLL REVEAL
========================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold:0.12
        }

    );


document
    .querySelectorAll(
        "section, .glass-card, .skill-card, .tech-card, .project-card, .service-card, .achievement-card, .certificate-card, .timeline-item"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


/* Add visible state */

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.show{
    opacity:1 !important;
    transform:translateY(0) !important;
}

`;

document.head.appendChild(revealStyle);



/* =========================
   EMAILJS
========================= */

emailjs.init("75CANdOSFIbu57Ls9");


const contactForm =
    document.getElementById("contact-form");


if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();


            emailjs.sendForm(

                "service_infc5qd",

                "template_2rdn7jv",

                this

            )

            .then(() => {

                alert(
                    "Message Sent Successfully ❤️"
                );

                this.reset();

            })

            .catch(() => {

                alert(
                    "Failed to Send Message"
                );

            });

        }
    );

}



/* =========================
   AI ASSISTANT
========================= */

const chatToggle =
    document.getElementById("chat-toggle");

const chatBox =
    document.getElementById("chat-box");

const input =
    document.getElementById("user-input");

const chatBody =
    document.getElementById("chat-body");


if(chatToggle){

    chatToggle.addEventListener(
        "click",
        () => {

            if(chatBox.style.display === "block"){

                chatBox.style.display = "none";

            }else{

                chatBox.style.display = "block";

                input.focus();

            }

        }
    );

}



if(input){

    input.addEventListener(
        "keypress",
        event => {

            if(event.key !== "Enter") return;


            const message =
                input.value.trim();


            if(message === "") return;


            /* User message */

            chatBody.innerHTML += `

                <div class="user-msg">
                    ${escapeHTML(message)}
                </div>

            `;


            const text =
                message.toLowerCase();


            let reply =
                "Sorry, I don't know about that yet. Try asking about my skills, projects, BS App Studio or contact information.";


            /* Greeting */

            if(
                text.includes("hi") ||
                text.includes("hello") ||
                text.includes("hey") ||
                text.includes("hii")
            ){

                reply =
                    "👋 Hello! Welcome to Balasingam's Portfolio. How can I help you?";

            }


            /* Name */

            else if(
                text.includes("name") ||
                text.includes("who are you")
            ){

                reply =
                    "👨‍💻 I'm Balasingam's AI Assistant. Balasingam is an Electronics and Communication Engineering graduate and Software Developer.";

            }


            /* Skills */

            else if(
                text.includes("skill") ||
                text.includes("skills")
            ){

                reply =
                    "💻 Balasingam's skills include Software Development, Game Development, Video Editing, Design, 3D and Electronics.";

            }


            /* Kumari Kandam */

            else if(
                text.includes("kumari") ||
                text.includes("game")
            ){

                reply =
                    "🗺️ Kumari Kandam is Balasingam's current project — an original open-world driving simulation game being developed using Blender and Godot.";

            }


            /* BS App Studio */

            else if(
                text.includes("studio") ||
                text.includes("bs app")
            ){

                reply =
                    "🏢 BS App Studio is Balasingam's creative technology studio focused on games, apps, websites, software, 3D and digital projects.";

            }


            /* Project */

            else if(
                text.includes("project") ||
                text.includes("projects")
            ){

                reply =
                    "🚀 Current project: Kumari Kandam Open-World Driving Simulation. More original apps and games are planned under BS App Studio.";

            }


            /* Contact */

            else if(
                text.includes("contact") ||
                text.includes("phone") ||
                text.includes("whatsapp")
            ){

                reply =
                    "📞 You can contact Balasingam using the Call, WhatsApp or Contact section on this website.";

            }


            /* Resume */

            else if(
                text.includes("resume") ||
                text.includes("cv")
            ){

                reply =
                    "📄 You can download the CV using the Download CV button on the Home section.";

            }


            /* Bye */

            else if(
                text.includes("bye")
            ){

                reply =
                    "👋 Thanks for visiting Balasingam's Portfolio. See you again!";

            }


            /* Bot reply */

            setTimeout(() => {

                chatBody.innerHTML += `

                    <div class="bot-msg">
                        ${reply}
                    </div>

                `;

                chatBody.scrollTop =
                    chatBody.scrollHeight;

            }, 350);


            input.value = "";

            chatBody.scrollTop =
                chatBody.scrollHeight;

        }
    );

}



/* =========================
   HTML ESCAPE
========================= */

function escapeHTML(text){

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}
