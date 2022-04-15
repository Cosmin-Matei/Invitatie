function animatie() {
    const plic = document.querySelector('.plic');
    const capac1 = document.querySelector('.inchis');
    const capac2 = document.querySelector('.deschis');
    const invitatie = document.querySelector('.invitatie');
    const invelitoare = document.querySelector('.invelitoare');
    const imagine = document.querySelector('.imagine');
    const text = document.querySelector('.text');
    const titlu = document.querySelector('.titlu');
    const varsta = document.querySelector('.varsta');
    const data = document.querySelector('.data');
    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 5000); 
    };
    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 8000); 
    };
//de adugat functionalitara cu imaginea    => *rezolvat*
    imagine.addEventListener('click', () => {
//partea 1 (se deschide plicul)
        imagine.classList.toggle('opac');
        capac1.classList.toggle('toggle');
        capac2.classList.toggle('toggle');
        invitatie.classList.toggle('toggle');
        invelitoare.classList.toggle('toggle');
//partea 2 (dispare plicul)
        capac1.classList.toggle('opac');
        capac2.classList.toggle('opac');
        plic.classList.toggle('opac');
        invelitoare.classList.toggle('opac');
//apare invitatia cu informatii + confetti dupa 0.5s
        start();
        stop();
        invitatie.classList.toggle('marire');
        titlu.classList.toggle('toggle');
        text.classList.toggle('opac');
        data.classList.toggle('opac');
        varsta.classList.toggle('opac');
    });
}
animatie();