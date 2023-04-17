const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slide = 0;
function changeSlide(sens) {
	num = num + sens;
	if (num < 0) 
	num = slides.length -1;
	if (slide > slides.length -1)
	num = 0;
	document.getElementById("banner").src = slide[num];
}

const before = document.querySelector(".arrow_left");
const after = document.querySelector(".arrow_right");

before.addEventListener("click", clickMouse);
function clickMouse(event) {
  alert ("Hello World!");
}

after.addEventListener("click", clickMouse2);
function clickMouse2(event) {
	alert ("Bye World!");
}

