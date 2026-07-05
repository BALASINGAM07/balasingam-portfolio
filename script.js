// Typing Animation

const words = [
  "ECE Graduate",
  "Software Developer",
  "Video Editor",
  "Game Developer",
  "Creative Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    let current = words[wordIndex];

    if(!deleting){
        typing.textContent = current.substring(0,charIndex++);
    }else{
        typing.textContent = current.substring(0,charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if(!deleting && charIndex === current.length + 1){
        deleting = true;
        speed = 1500;
    }

    if(deleting && charIndex === 0){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect,speed);

}

typeEffect();


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});


document.querySelectorAll("section,.card").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(70px)";
el.style.transition="1s";

observer.observe(el);

});


// Navbar Background

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.8)";

}else{

header.style.background="rgba(0,0,0,.25)";

}

});
emailjs.init("75CANdOSFIbu57Ls9");

document
.getElementById("contact-form")
.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"service_infc5qd",

"template_2rdn7jv",

this

)

.then(()=>{

alert("Message Sent Successfully ❤️");

this.reset();

})

.catch(()=>{

alert("Failed to Send");

});

});

// Statistics Counter

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/80;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});



// Mobile Menu

const menuToggle=document.getElementById("menu-toggle");

const navMenu=document.querySelector("nav ul");

menuToggle.onclick=()=>{

navMenu.classList.toggle("active");

if(navMenu.classList.contains("active")){

menuToggle.innerHTML='<i class="fas fa-times"></i>';

}else{

menuToggle.innerHTML='<i class="fas fa-bars"></i>';

}

}

// Close menu after click

document.querySelectorAll("nav ul li a").forEach(link=>{

link.onclick=()=>{

navMenu.classList.remove("active");

menuToggle.innerHTML='<i class="fas fa-bars"></i>';

}

});
// Live Clock

function updateClock(){

    const now = new Date();

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    document.getElementById("live-clock").textContent =
        now.toLocaleTimeString("en-IN", options);

}

updateClock();

setInterval(updateClock,1000);



const chatToggle=document.getElementById("chat-toggle");
const chatBox=document.getElementById("chat-box");
const input=document.getElementById("user-input");
const body=document.getElementById("chat-body");

console.log(chatToggle);
console.log(chatBox);
console.log(input);
console.log(body);

chatToggle.onclick=()=>{

chatBox.style.display=
chatBox.style.display==="block"
?"none":"block";

}

input.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

const msg=input.value.trim();

if(msg==="") return;

body.innerHTML+=`
<div class="user-msg">${msg}</div>`;

let reply="Sorry, I don't know.";

const text=msg.toLowerCase();

if (
    text.includes("hi") ||
    text.includes("hello") ||
    text.includes("hey") ||
    text.includes("hii")
) {

    reply = "👋 Hello! Welcome to Balasingam's Portfolio. How can I help you?";

}

else if (text.includes("name")) {

    reply = "👨‍💻 My name is Balasingam. I'm an Electronics and Communication Engineering graduate.";

}

else if (text.includes("skill")) {

    reply = "💻 My skills include HTML, CSS, JavaScript, Video Editing, UI Design and Software Development.";

}

else if (text.includes("project")) {

    reply = "🚀 My projects include Kutty Cinema, Portfolio Website, Resume Builder and more upcoming applications.";

}

else if (text.includes("contact")) {

    reply = "📞 You can contact me using the Contact section or the WhatsApp button.";

}

else if (text.includes("resume") || text.includes("cv")) {

    reply = "📄 Click the 'Download CV' button on the Home page.";

}

else if (text.includes("bye")) {

    reply = "👋 Thank you for visiting my portfolio. Have a wonderful day!";

}

if(text.includes("skill"))

reply="Balasingam specializes in Video Editing, Web Development, Electronics and Design.";

else if(text.includes("project"))

reply="Current projects include Portfolio Website, Kutty Cinema and future Apps & Games.";

else if(text.includes("contact"))

reply="Use the Contact section below or Instagram: @mr._.bs_";

else if(text.includes("resume"))

reply="Click the Download CV button on the Home page.";

body.innerHTML+=`
<div class="bot-msg">${reply}</div>`;

input.value="";

body.scrollTop=body.scrollHeight;

}

});
