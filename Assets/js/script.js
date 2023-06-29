const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const gradBg = document.querySelector('.background');

document.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var percentX = (mouseX / window.innerWidth) * 100;
    var percentY = (mouseY / window.innerHeight) * 100;

    gradBg.style.background = 'linear-gradient(' + percentX + 'deg, #ff38f5d8, #6c1effda)';
});

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}, 1000);

const relogioElement = document.querySelector('.relogio');
let isDragging = false;
let offset = { x: 0, y: 0 };

