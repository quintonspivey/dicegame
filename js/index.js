var newnum = Math.floor(Math.random() * 6) + 1;
var newimage = "images/dice" + newnum + ".png";

document.querySelector('.img1').setAttribute('src',newimage);
