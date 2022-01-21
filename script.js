const btns = document.querySelectorAll('[data-carousel-btn]');

btns.forEach(btn => btn.addEventListener('click', () => {
    // determening if we are going to the next or prev image
    const offset = btn.dataset.carouselBtn === 'next' ? 1 : -1;   
    
    // getting all the slides by closest parent element from the btn
    const slides = btn.closest('[data-carousel]')
                      .querySelector('[data-slides]');
    
    // getting active slide
    const activeSlide = slides.querySelector('[data-active]');
    
    // geting new index, but finding out index of active slide and adding offset
    // first converting node elems list into an array with spread operat
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // looping through slides indexes
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0;

    // setting active slide to the newIndex
    slides.children[newIndex].dataset.active = true;
    // removing the active dataset from the previously active slide
    delete activeSlide.dataset.active;
}));
