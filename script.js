// Hamburger toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const roles = ["Software Developer", "Backend Intern", "Python Enthusiast", "Full Stack Learner"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
    if (charIndex < roles[index].length) {
        typingElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.skill-tags, .project-grid, .project-card', { origin: 'bottom' });
ScrollReveal().reveal('.education-column', { origin: 'left' });
ScrollReveal().reveal('.about-content, .about-img', { origin: 'right' });

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formMessage = document.getElementById("formMessage");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Simulated form submission
    formMessage.style.color = "green";
    formMessage.textContent = "Thank you! Your message has been sent.";

    e.target.reset();
});

