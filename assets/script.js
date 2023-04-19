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


// Changement de l'image 
// Numéro de la première slide
let currentSlide = 0; 
// Sauvegarde le tableau des dots dans la variables dots
let dots = document.getElementsByClassName("dot");

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

	// Changement du texte en fonction de l'image du slide
	// Récupère le paragraphe #slide_text
	const slideText = document.getElementById("slide_text");
	// Remplacer le contenu HTML du paragraphe
	slideText.innerHTML = slides[currentSlide].tagLine;

	// Retire "dot_selected" de tous les dots
	for(let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("dot_selected");
	}
	// Ajoute "dot_selected" au dot correspondant à la slide
	dots[currentSlide].classList.add("dot_selected");
}

// Au clic sur la flèche droite, slide suivant
const next = document.getElementById("next");
next.addEventListener("click", function () {
    ChangeSlide(+1);
	}
);


// Au clic sur la flèche gauche, slide précédent
const prev = document.getElementById("prev");
prev.addEventListener("click", function () {
    ChangeSlide(-1);
	}
);
