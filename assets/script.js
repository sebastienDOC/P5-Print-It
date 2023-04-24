const slides = [
	{
		// Slide 0 ou slide[0]
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		// Slide 1 ou slide[1]
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		// Slide 2 ou slide[2]
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		// Slide 3 ou slide[3]
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Au clic sur la flèche droite, slide suivant
const next = document.getElementById("next");
next.addEventListener("click", function () {
    ChangeSlide(+1);
	},
);

// Au clic sur la flèche gauche, slide précédent
const prev = document.getElementById("prev");
prev.addEventListener("click", function () {
    ChangeSlide(-1);
	}
);

// Ajoute un dot par slide
function addDots() {
	const dots = document.querySelector(".dots");
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("span");
		dot.classList.add("dot");
		dots.appendChild(dot);
		// Créer un ID unique par dot
		dot.setAttribute("id", `slide${i}`);
		// Ajoute 'dot_selected' au premier dot au chargement de la page
		if (i == 0) {
			dots.children[i].classList.add("dot_selected");
		}
	}
}
addDots();

let activeDots = document.querySelectorAll(".dot");
activeDots.forEach(activeDot => {
	// Au clic sur un dot :
	activeDot.addEventListener("click", event => {
		// Retire "dot_selected" au précédent slide
		document.querySelector(".dot.dot_selected").classList.remove("dot_selected");
		// Ajoute "dot_selected" au slide
		event.target.classList.add("dot_selected");
		// Changement des slides au clic sur les dots
		for(let i = 0; i < dots.length; i++) {
			if (event.target.id == `slide${i}`){
				document.getElementById("slide").src = "./assets/images/slideshow/" + slides[i].image;
				document.getElementById("slide_text").innerHTML = slides[i].tagLine;
				return currentSlide = i;
			}
		}
	});
	// Hover des dots
	activeDot.addEventListener("mouseover", event => {
		// Si la cible contiens une classe, cursor default
		if (event.target.classList.contains("dot_selected")) {
			event.target.style.cursor = "default";
		// Sinon, cursor pointer
		} else {
			event.target.style.cursor = "pointer";
		};
	});
});

// Sauvegarde le tableau des dots dans la variables dots
let dots = document.getElementsByClassName("dot");
// Changement du dot en fonction de l'image du slide
function ChangeDot() {
	// Retire "dot_selected" de tous les dots
	for(let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("dot_selected");
	}
	// Ajoute "dot_selected" au dot correspondant à la slide
	dots[currentSlide].classList.add("dot_selected");
}

// Changement du texte en fonction de l'image du slide
function ChangeText() {
	// Récupère le paragraphe #slide_text
	const slideText = document.getElementById("slide_text");
	// Remplacer le contenu HTML du paragraphe
	slideText.innerHTML = slides[currentSlide].tagLine;
}

// Numéro de la première slide
let currentSlide = 0; 

function ChangeSlide(moveTo) {
	currentSlide = currentSlide + moveTo; 
	// Boucle pour faire revenir le slider à la première slide
	// au clic sur la dernière slide
	if (currentSlide > slides.length - 1) {
		currentSlide = 0;
	}
	// Boucle pour faire revenir le slider à la dernière slide
	// au clic sur la première slide
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	// Changement de la source de l'image au clic
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

/*
let myInterval = window.setInterval(function () {
	ChangeSlide(+1);  
	}, 
	5000
);
*/