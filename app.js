const sir = document.getElementById("sir");

function typewritter(element, text, index,speed) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typewritter(element, text,index, speed), speed);
    }
}

const SIRAPOP = "SIRAPOP_";
typeWriter(sir, SIRAPOP, 0, 50);



const sections = document.querySelectorAll('section');
navLink = document.querySelectorAll('nav a');

function smoothScroll(event) {
    event.preventDefault();
    const targetID = event.target.getAttribute('href');
    const targetSelection = document.querySelectorAll(targetID);
    targetSelection.scrollIntoView({behavior : 'smooth'});
}

navLinks.arrary.forEach(link => {
    link.addEventListener('click'. smoothScroll);

});
window.addEventListener('scroll', () => {
    setActiveLink();
    stickyNav();
  });