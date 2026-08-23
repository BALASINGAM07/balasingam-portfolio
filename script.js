// =========================
// TYPING ANIMATION
// =========================

const words = [
    "ECE Graduate",
    "Software Developer",
    "Game Developer",
    "3D Creator",
    "Creative Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent =
        current.substring(0,charIndex++);

    }else{

        typing.textContent =
        current.substring(0,charIndex--);

    }

    let speed = deleting ? 60 : 110;

    if(!deleting && charIndex === current.length + 1){

        deleting = true;
        speed = 1500;

    }

    if(deleting && charIndex === 0){

        deleting = false;

        wordIndex =
        (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect,speed);

}

typeEffect();


// =========================
// SCROLL ANIMATION
// =========================

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
});


document
.querySelectorAll(
"section,.card,.service-card,.achievement-card,.tech-card,.certificate-card"
)
.forEach(el => {

    el.classList.add("reveal");

    observer.observe(el);

});


// =========================
// NAVBAR
// =========================

window.addEventListener("scroll",()=>{

    const header =
    document.querySelector("header");

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


// =========================
// EMAIL JS
// =========================

emailjs.init("75CANdOSFIbu57Ls9");

const contactForm =
document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        emailjs.sendForm(

            "service_infc5qd",

            "template_2rdn7jv",

            this

        )

        .then(()=>{

            alert(
            "Message Sent Successfully ❤️"
            );

            this.reset();

        })

        .catch(()=>{

            alert("Failed to Send");

        });

    });

}


// =========================
// STATISTICS COUNTER
// =========================

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(

(entries,observer)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            Number(counter.dataset.target);

            let count = 0;

            const update = ()=>{

                const increment =
                Math.max(
                    1,
                    Math.ceil(target / 60)
                );

                count += increment;

                if(count >= target){

                    counter.innerText =
                    target + "+";

                    return;

                }

                counter.innerText =
                count;

                setTimeout(update,30);

            };

            update();

            observer.unobserve(counter);

        }

    });

},
{
    threshold:.7
});


counters.forEach(counter=>{

    counterObserver.observe(counter);

});


// =========================
// MOBILE MENU
// =========================

const menuToggle =
document.getElementById("menu-toggle");

const navMenu =
document.querySelector("nav ul");

menuToggle.onclick = ()=>{

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuToggle.innerHTML =
        '<i class="fas fa-times"></i>';

    }else{

        menuToggle.innerHTML =
        '<i class="fas fa-bars"></i>';

    }

};


document
.querySelectorAll("nav ul li a")
.forEach(link=>{

    link.onclick = ()=>{

        navMenu.classList.remove("active");

        menuToggle.innerHTML =
        '<i class="fas fa-bars"></i>';

    };

});


// =========================
// LIVE CLOCK
// =========================

function updateClock(){

    const clock =
    document.getElementById("live-clock");

    if(!clock) return;

    const now =
    new Date();

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

setInterval(
    updateClock,
    1000
);


// =========================
// AI ASSISTANT
// =========================

const chatToggle =
document.getElementById("chat-toggle");

const chatBox =
document.getElementById("chat-box");

const input =
document.getElementById("user-input");

const chatBody =
document.getElementById("chat-body");


chatToggle.onclick = ()=>{

    chatBox.style.display =
    chatBox.style.display === "block"
    ? "none"
    : "block";

};


input.addEventListener(
"keypress",
(e)=>{

    if(e.key !== "Enter") return;

    const msg =
    input.value.trim();

    if(!msg) return;


    chatBody.innerHTML += `

        <div class="user-msg">
            ${msg}
        </div>

    `;


    const text =
    msg.toLowerCase();

    let reply =
    "Sorry, I don't have information about that yet. Try asking about my skills, projects, Kumari Kandam or BS App Studio.";


    if(
        text.includes("hi") ||
        text.includes("hello") ||
        text.includes("hey") ||
        text.includes("hii")
    ){

        reply =
        "👋 Hello! Welcome to Balasingam's Portfolio. How can I help you?";

    }


    else if(
        text.includes("name")
    ){

        reply =
        "👨‍💻 My name is Balasingam. I'm an Electronics and Communication Engineering graduate and software & game development enthusiast.";

    }


    else if(
        text.includes("skill")
    ){

        reply =
        "💻 Balasingam's skills include Software Development, Game Development, Video Editing, Graphic Design, 3D Design, Electronics and Web Development.";

    }


    else if(
        text.includes("kumari") ||
        text.includes("kandam")
    ){

        reply =
        "🌍 Kumari Kandam is Balasingam's current major game project. It is an original open-world driving simulation game featuring buses, trucks, roads, cities, villages, industries, temples and natural environments. The project is currently under process.";

    }


    else if(
        text.includes("project")
    ){

        reply =
        "🚀 Current projects include Kumari Kandam, ResumeFlow, 3D models, applications and original game concepts.";

    }


    else if(
        text.includes("studio") ||
        text.includes("bs app")
    ){

        reply =
        "🚀 BS App Studio is Balasingam's independent creative technology initiative focused on Games, Apps, Software, Web, 3D and Animation projects.";

    }


    else if(
        text.includes("blender")
    ){

        reply =
        "🧊 Blender is being used for 3D modelling, environments, buildings, vehicles and other assets for the Kumari Kandam project.";

    }


    else if(
        text.includes("godot")
    ){

        reply =
        "🎮 Godot is planned for the game simulation and interactive gameplay side of the Kumari Kandam project.";

    }


    else if(
        text.includes("contact")
    ){

        reply =
        "📞 You can contact Balasingam through the Contact section, phone button or WhatsApp button.";

    }


    else if(
        text.includes("resume") ||
        text.includes("cv")
    ){

        reply =
        "📄 You can download Balasingam's CV using the Download CV button on the Home section.";

    }


    else if(
        text.includes("bye")
    ){

        reply =
        "👋 Thanks for visiting Balasingam's Portfolio. Have a great day!";

    }


    setTimeout(()=>{

        chatBody.innerHTML += `

            <div class="bot-msg">
                ${reply}
            </div>

        `;

        chatBody.scrollTop =
        chatBody.scrollHeight;

    },300);


    input.value = "";

});