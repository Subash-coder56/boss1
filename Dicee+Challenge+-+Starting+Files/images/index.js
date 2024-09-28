var randomnum1 = Math.floor(Math.random() * 6) + 1

var randomimg1 = "/images/dice"+randomnum1+".png"


var randomnum2 = Math.floor(Math.random() * 6) + 1

var randomimg2 = "/images/dice"+randomnum2+".png"




var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomimg1);

image2.setAttribute("src", randomimg2);



if (randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML = "player 1 is win ";
}
else if(randomnum1 < randomnum2){
    document.querySelector("h1").innerHTML = "player 2 is win ";
}
else{
    document.querySelector("h1").innerHTML = "Draw match";
}


