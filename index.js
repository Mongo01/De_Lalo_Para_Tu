const yesBtm = document.querySelector('#yesBtm');

yesBtm.addEventListener('click', function redireccion() {
    location.href = "https://open.spotify.com/track/2afCBiru10AFckfOa49wIa?si=hvK9hd8lQFWwvm-fa3GPGg&utm_source=copy-link"
});



const noBtm = document.querySelector('#noBtm');

noBtm.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtm.style.setProperty('top', randomY + '%');
    noBtm.style.setProperty('left', randomX + '%');
    noBtm.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
});