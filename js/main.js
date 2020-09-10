//collapse
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 10){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
});

//animated bubble
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top, #C1006D, #E52D5F, #FF564F, #FF803D, #FFAC2C, #FFD527, #FEFF41)",
    "linear-gradient(to right top, #00FFFF, #00EDFF, #00D4FE, #37B7FF, #A890FE, #E55DE1, #F933B4)",
    "linear-gradient(45deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
];

const options = {
    threshold: 0.5
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page = ${className}]`);
        const index = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        }
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[index];
            activeAnchor.classList.add('color_change');
        }
        else{activeAnchor.classList.remove('color_change');}
    })
}

sections.forEach(section => {
    observer.observe(section);
});