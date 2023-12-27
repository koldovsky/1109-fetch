const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" alt="Banana"></div>',
    '<div><img src="img/girl.svg" alt="Girl"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>',
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.products-carousel__slide');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 > slides.length - 1 ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

renderSlide();

// setInterval(nextSlide, 3000);

const buttonNext = document.querySelector('.products-carousel__button-next');
buttonNext.addEventListener('click', nextSlide);

const buttonPrev = document.querySelector('.products-carousel__button-prev');
buttonPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);

