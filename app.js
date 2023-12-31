const sir = document.getElementById("sir");

function typewritter(element,text,index,speed) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typewritter(element,text,index,speed),speed);
    }
}

const SIRAPOP = "Sirapop_";
typewritter(sir, SIRAPOP, 0, 50);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function setActiveLink() {
  const scrollY = window.scrollY;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks.forEach((link) => link.classList.add('inactive'));
      navLinks[index].classList.add('active');
      navLinks[index].classList.remove('inactive');
    }
  });
  }
  
  