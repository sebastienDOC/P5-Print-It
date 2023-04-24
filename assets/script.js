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

const next = document.getElementById("next");
next.addEventListener("click", function () {
    ChangeSlide(+1);
	},
);

const prev = document.getElementById("prev");
prev.addEventListener("click", function () {
    ChangeSlide(-1);
	}
);

function addDots() {
	const dots = document.querySelector(".dots");
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("span");
		dot.classList.add("dot");
		dots.appendChild(dot);
		dot.setAttribute("id", `slide${i}`);
		if (i == 0) {
			dots.children[i].classList.add("dot_selected");
		}
	}
}
addDots();

let activeDots = document.querySelectorAll(".dot");
activeDots.forEach(activeDot => {
	activeDot.addEventListener("click", event => {
		document.querySelector(".dot.dot_selected").classList.remove("dot_selected");
		event.target.classList.add("dot_selected");
		for(let i = 0; i < dots.length; i++) {
			if (event.target.id == `slide${i}`){
				document.getElementById("slide").src = "./assets/images/slideshow/" + slides[i].image;
				document.getElementById("slide_text").innerHTML = slides[i].tagLine;
				return currentSlide = i;
			}
		}
	});
	activeDot.addEventListener("mouseover", event => {
		if (event.target.classList.contains("dot_selected")) {
			event.target.style.cursor = "default";
		} else {
			event.target.style.cursor = "pointer";
		};
	});
});

let currentSlide = 0; 
function ChangeSlide(moveTo) {
	currentSlide = currentSlide + moveTo; 
	if (currentSlide > slides.length - 1) {
		currentSlide = 0;
	}
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	document.getElementById("slide").src = "./assets/images/slideshow/" + slides[currentSlide].image;

	/*
	// Animation à chaque clic
	banner.animate(
		[
			{opacity:"0.6"}, 
			{opacity:"1"}
		],
		{duration: 800, fill:'forwards'},
	);
	*/

	ChangeText();
	ChangeDot();
}

let dots = document.getElementsByClassName("dot");
function ChangeDot() {
	for(let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("dot_selected");
	}
	dots[currentSlide].classList.add("dot_selected");
}

function ChangeText() {
	const slideText = document.getElementById("slide_text");
	slideText.innerHTML = slides[currentSlide].tagLine;
}

/*
let myInterval = window.setInterval(function () {
	ChangeSlide(+1);  
	}, 
	5000
);
*/