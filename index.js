// alert("Refresh to play");
function random()
{
   var randomNumber1 = Math.random();
   randomNumber1 = randomNumber1 * 6 + 1;
   randomNumber1 = Math.floor(randomNumber1);
   return randomNumber1;
}
var n1 = random();
var n2 = random();
var dice1= "images/dice"+n1+".png";
var dice2= "images/dice"+n2+".png";
document.querySelector(".img1").setAttribute("src",(dice1));
document.querySelector(".img2").setAttribute("src",(dice2));

if (n1 > n2)
{
  document.querySelector("h1").innerHTML = "🥇Player_1 WINS";
}
else if (n2 > n1)
{
  document.querySelector("h1").innerHTML = "Player_2 WINS🥇";
}
else{
  document.querySelector("h1").innerHTML = "DRAW";
}
