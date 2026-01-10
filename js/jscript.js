document.addEventListener('DOMContentLoaded', () => {

const images = [
    'img/kayak-ferragudo1.jpg',
    'img/kayak-ferragudo2.jpg',
    'img/kayak-ferragudo3.jpg',
    'img/kayak-ferragudo4.jpg',
    'img/kayak-ferragudo5.jpg',
    'img/kayak-ferragudo6.jpg',
    'img/kayak-ferragudo7.jpg',
    'img/kayak-ferragudo8.jpg',
    'img/kayak-ferragudo9.jpg'
];


    let current = 0;
    const slider = document.querySelector('.slider');

    if (!slider) return;

    // imagem inicial
    slider.style.backgroundImage = `url("${images[current]}")`;
    slider.style.opacity = 1;

    setInterval(() => {
        slider.style.opacity = 0;

        setTimeout(() => {
            current = (current + 1) % images.length;
            slider.style.backgroundImage = `url("${images[current]}")`;
            slider.style.opacity = 1;
        }, 1300);

    }, 7000);

});
