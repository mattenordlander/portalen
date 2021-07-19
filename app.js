    const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    //Toggle Nav
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });

} 
navSlide();

const header = document.querySelector('nav');

window.onscroll = function() {
    const top = window.scrollY;
    if (top >= 150){
        header.classList.add('scroll')
        header.addEventListener('mouseover',() =>{
            header.classList.remove('scroll');
        })
    } else {
        header.classList.remove('scroll');
    }
}


