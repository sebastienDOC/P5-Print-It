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
let numero = 0; 

function ChangeSlide(sens) {
	numero = numero + sens; 
	// Boucle pour faire revenir le slider à la première slide
	// au clic sur la dernière slide
	if (numero > slides.length - 1) {
		numero = 0;
	}
	// Boucle pour faire revenir le slider à la dernière slide
	// au clic sur la première slide
	if (numero < 0) {
		numero = slides.length - 1;
	}
	// Changement de la source de l'image au clic
	document.getElementById("slide").src = "./assets/images/slideshow/" + slides[numero].image;

	// Changement du texte en fonction de l'image du slide
	// Récupère le paragraphe #slide_text
	const slideText = document.getElementById("slide_text"); 
	// Récupère le contenu HTML du paragraphe
	let contenu = slideText.innerHTML; 
	// Remplacer le contenu HTML du paragraphe
	slideText.innerHTML = slides[numero].tagLine;

	// Changement du dot en fonction de l'image du slide

}