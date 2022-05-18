const mainImages = [
    "main-01.jpg",
    "main-02.jpg",
    "main-03.jpg",
    "main-04.jpg",
    "main-05.jpg"
];

const mainImg = document.querySelector("#section-0");

const showImg = function()
{
    let randomImg = mainImages[Math.floor(Math.random() * mainImages.length)];
    mainImg.style.background = `url(./img/${randomImg}) no-repeat center / cover`; 
    setTimeout(showImg, 5000);
}