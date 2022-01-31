var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage= "dice"+ randomNumber1 +".png";

var imgsource = "images/"+ randomImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",imgsource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2= "dice"+ randomNumber2 +".png";

var imgsource2 = "images/"+ randomImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",imgsource2);
