let img = document.getElementById('bioImage');
let text = document.getElementById('bioText');
let social = document.getElementById('social');

window.onload = () => {

    setTimeout(() => {
        img.classList.add('img__fade-in');
    }, 0);

    setTimeout(() => {
        text.classList.add('bio__desc-fade-in');
    }, 1000);

    setTimeout(() => {
        social.classList.add('social__links-fade-in');
    }, 1500);
}