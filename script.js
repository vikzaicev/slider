const slider = document.querySelector('.slider')
const sliderItems = document.querySelectorAll('.item')
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')

sliderItems.forEach((slide, index) => {
    slide.dataset.index = index
    sliderItems[0].setAttribute('data-active', '')

    if (index != 0) slide.classList.add('hiden');

    slide.addEventListener('click', function () {
        showNextSlide('next')
    })
});

btnNext.onclick = function () {
    showNextSlide('next')
}

btnPrev.onclick = function () {
    showNextSlide('prev')
}

function showNextSlide(direction) {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideInd = +currentSlide.dataset.index
    currentSlide.classList.add('hiden')
    currentSlide.removeAttribute('data-active')
    let nextSlideIndex
    if (direction == 'next') {
        nextSlideIndex = currentSlideInd == sliderItems.length - 1 ? 0 : currentSlideInd + 1;
    }
    else if (direction == 'prev') {
        nextSlideIndex = currentSlideInd == 0 ? sliderItems.length - 1 : currentSlideInd - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hiden')
    nextSlide.setAttribute('data-active', '')
}