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



document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formMessage = document.getElementById("formMessage");
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xpwlrgay", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });

    if (response.ok) {
      formMessage.style.color = "lightgreen";
      formMessage.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      formMessage.style.color = "red";
      formMessage.textContent = "Oops! Something went wrong. Please try again.";
    }
  } catch (error) {
    formMessage.style.color = "red";
    formMessage.textContent = "Error submitting form. Please check your connection.";
  }
});
