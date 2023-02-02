document.getElementsByClassName('btn1')[0].addEventListener("click", () => {
    document.querySelector('.btn1').style.border = "2px solid red";
    document.querySelector('.btn2').style.border = "none";
    document.querySelector('.btn3').style.border = "none";
    document.querySelector('.btn4').style.border = "none";
    document.querySelector('.main').style.backgroundColor = "rgb(81 108 239 / 72%)";
    document.querySelector('.main').style.color = "Black";
    document.querySelector('.head').style.color = "Black";
});

document.getElementsByClassName('btn2')[0].addEventListener("click", () => {
    document.querySelector('.btn2').style.border = "2px solid red";
    document.querySelector('.btn1').style.border = "none";
    document.querySelector('.btn3').style.border = "none";
    document.querySelector('.btn4').style.border = "none";
    document.querySelector('.main').style.backgroundColor = "#b7ff0033";
    document.querySelector('.main').style.color = "green";
    document.querySelector('.head').style.color = "Black";
});

document.getElementsByClassName('btn3')[0].addEventListener("click", () => {
    document.querySelector('.btn3').style.border = "2px solid red";
    document.querySelector('.btn1').style.border = "none";
    document.querySelector('.btn2').style.border = "none";
    document.querySelector('.btn4').style.border = "none";
    document.querySelector('.main').style.backgroundColor = "rgb(152 229 133 / 76%)";
    document.querySelector('.main').style.color = "Black";
    document.querySelector('.head').style.color = "Black";
});

document.getElementsByClassName('btn4')[0].addEventListener("click", () => {
    document.querySelector('.btn4').style.border = "2px solid red";
    document.querySelector('.btn1').style.border = "none";
    document.querySelector('.btn2').style.border = "none";
    document.querySelector('.btn3').style.border = "none";
    document.querySelector('.main').style.backgroundColor = "rgb(0, 0, 0)";
    document.querySelector('.main').style.color = "#fff";
    document.querySelector('.head').style.color = "yellow";
});
