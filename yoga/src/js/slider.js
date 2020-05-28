function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((i) => {
            i.style.display = 'none'
        });

        dots.forEach((i) => {
            i.classList.remove('dot-active')
        });

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');

    }
    showSlides(slideIndex);

    function nextSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => nextSlide(-1));
    next.addEventListener('click', () => nextSlide(1));

    dotsWrap.addEventListener('click', (e) => {
        for (let i = 0; i <= dots.length; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;