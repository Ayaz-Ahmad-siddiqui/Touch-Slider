const slider = document.querySelector('.slider-container'),
    slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prvTranslate = 0,
    animationID = 0,
    currentIndex = 0

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    //Touch event
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', toucMove)

    //Mouse Event
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)

})