var typed= new Typed("#text", {
    strings: ['Desenvolvedor Full-Stack.', 'Desenvolvedor Web.'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    
};