const txtWrap = document.querySelector(".txt-wrap");
const imgWrap = document.querySelector(".img-wrap");

let timerID          = null;
let opacityValue_out = 0;
let yValue = 0;
let xValue = 200;

const fadeMove = function()
{
    if(opacityValue_out <= 1)
    {
        yValue = -200 * opacityValue_out;
        xValue = -200 * opacityValue_out;

        console.log(`opacityValue_out : ${opacityValue_out} , yValue : ${yValue}`);
        txtWrap.style.opacity = `${opacityValue_out}`;
        imgWrap.style.opacity = `${opacityValue_out}`;
        opacityValue_out = opacityValue_out + 0.01;

        txtWrap.style.transform = `translateY(${yValue}px)`;
        imgWrap.style.transform = `translateX(${xValue}px)`;
    }
    else
    {
        clearInterval(timerID);
        timerID = null;
        txtWrap.style.opacity = `1`;
        return;
    }
}
window.addEventListener("load", (event)=>{
    timerID = setInterval(fadeMove, 20);
});