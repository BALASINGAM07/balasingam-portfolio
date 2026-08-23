/* =================================
   TYPING ANIMATION
================================= */

const words = [

    "Software Developer",
    "Game Developer",
    "3D Creator",
    "Video Editor",
    "Creative Designer"

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
        currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent =
        currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            charIndex = 0;

            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 60 : 110;

    setTimeout(typeEffect,speed);

}

typeEffect();


/* =================================
   MOBILE MENU
================================= */

const menuToggle =
document.getElementById("menu-toggle");

const navMenu =
document.getElementById("nav-menu");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

        const icon =
        menuToggle.querySelector("i");

        if(navMenu.classList.contains("active")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        }else{

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


document.querySelectorAll("#nav-menu a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        const icon =
        menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =================================
   LIVE CLOCK
================================= */

function updateClock(){

    const clock =
    document.getElementById("live-clock");

    if(!clock) return;

    const now = new Date();

    clock.textContent =
    now.toLocaleTimeString(
        "en-IN",
        {
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
            hour12:true
        }
    );

}

updateClock();

setInterval(updateClock,1000);


/* =================================
   PROJECT DETAILS
================================= */

const projectButton =
document.getElementById("project-details-btn");

const projectDetails =
document.getElementById("project-details");

if(projectButton && projectDetails){

    projectButton.addEventListener("click",()=>{

        projectDetails.classList.remove("hidden");

        setTimeout(()=>{

            projectDetails.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        },100);

    });

}


/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
document.querySelectorAll(
    "section, .glass-card, .tech-item"
);

const revealObserver =
new IntersectionObserver(
    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold:.12
    }
);

revealElements.forEach(element=>{

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =================================
   NAVBAR SCROLL
================================= */

window.addEventListener("scroll",()=>{

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(3,3,3,.90)";

    }else{

        header.style.background =
        "rgba(5,5,5,.65)";

    }

});


/* =================================
   EMAIL JS
================================= */

if(typeof emailjs !== "undefined"){

    emailjs.init(
        "75CANdOSFIbu57Ls9"
    );

}

const contactForm =
document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            const button =
            contactForm.querySelector("button");

            const originalText =
            button.innerHTML;

            button.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Sending...';

            button.disabled = true;

            emailjs.sendForm(

                "service_infc5qd",

                "template_2rdn7jv",

                this

            )

            .then(()=>{

                alert(
                    "Message sent successfully ❤️"
                );

                contactForm.reset();

                button.innerHTML =
                originalText;

                button.disabled = false;

            })

            .catch((error)=>{

                console.error(error);

                alert(
                    "Failed to send message. Please try again."
                );

                button.innerHTML =
                originalText;

                button.disabled = false;

            });

        }
    );

}


/* =================================
   AI ASSISTANT
================================= */

const chatToggle =
document.getElementById("chat-toggle");

const chatWindow =
document.getElementById("chat-window");

const chatClose =
document.getElementById("chat-close");

const userInput =
document.getElementById("user-input");

const sendMessage =
document.getElementById("send-message");

const chatBody =
document.getElementById("chat-body");


function openChat(){

    chatWindow.style.display = "block";

}


function closeChat(){

    chatWindow.style.display = "none";

}


if(chatToggle){

    chatToggle.addEventListener(
        "click",
        ()=>{

            if(
                chatWindow.style.display === "block"
            ){

                closeChat();

            }else{

                openChat();

            }

        }
    );

}


if(chatClose){

    chatClose.addEventListener(
        "click",
        closeChat
    );

}


function sendChatMessage(){

    const message =
    userInput.value.trim();

    if(message === "") return;


    chatBody.innerHTML += `

        <div class="user-message">
            ${escapeHTML(message)}
        </div>

    `;


    const text =
    message.toLowerCase();

    let reply =
    "I'm still learning! Try asking about Balasingam, skills, projects, Kumari Kandam, BS App Studio or contact details.";


    if(
        text.includes("hi") ||
        text.includes("hello") ||
        text.includes("hey") ||
        text.includes("hii")
    ){

        reply =
        "👋 Hello! Welcome to Balasingam's portfolio. How can I help you?";

    }

    else if(
        text.includes("name") ||
        text.includes("who are you")
    ){

        reply =
        "👨‍💻 I'm Bala AI. Balasingam is an Electronics and Communication Engineering graduate interested in software, games, 3D and creative technology.";

    }

    else if(
        text.includes("skill") ||
        text.includes("skills")
    ){

        reply =
        "💻 Balasingam's main skills include Software Development, Game Development, Video Editing, Creative Design and Electronics.";

    }

    else if(
        text.includes("kumari") ||
        text.includes("project")
    ){

        reply =
        "🗺️ Kumari Kandam is the current project — an original fictional Tamil-inspired open-world driving simulation game currently under development.";

    }

    else if(
        text.includes("studio") ||
        text.includes("bs app")
    ){

        reply =
        "🚀 BS App Studio is Balasingam's creative technology studio focused on games, apps, software, websites, 3D and animation.";

    }

    else if(
        text.includes("resume") ||
        text.includes("cv")
    ){

        reply =
        "📄 You can download Balasingam's CV using the Download CV button on the Home section.";

    }

    else if(
        text.includes("contact") ||
        text.includes("instagram")
    ){

        reply =
        "📞 You can use the Contact section, phone button or WhatsApp button to connect.";

    }

    else if(
        text.includes("bye")
    ){

        reply =
        "👋 Thanks for visiting Balasingam's portfolio. See you again!";

    }


    setTimeout(()=>{

        chatBody.innerHTML += `

            <div class="bot-message">
                ${reply}
            </div>

        `;

        chatBody.scrollTop =
        chatBody.scrollHeight;

    },350);


    userInput.value = "";

    chatBody.scrollTop =
    chatBody.scrollHeight;

}


if(sendMessage){

    sendMessage.addEventListener(
        "click",
        sendChatMessage
    );

}


if(userInput){

    userInput.addEventListener(
        "keydown",
        (event)=>{

            if(event.key === "Enter"){

                sendChatMessage();

            }

        }
    );

}


/* =================================
   SECURITY
================================= */

function escapeHTML(text){

    const div =
    document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}