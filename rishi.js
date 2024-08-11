const texts = [
    "Web Developer",
    "Java Programmer",
    "Backend Developer"
];

let index = 0;

function changeText() {
    const h1 = document.getElementById('auto-change');
    h1.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 2000);

const menuToggle = document.getElementById('nav-menu');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
    console.log("hello");
navLinks.classList.toggle('show');
});

function previewProfile(){
   
    document.getElementById('preview-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('preview-modal').style.display = 'none';
}