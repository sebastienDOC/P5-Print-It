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

let numero = 0;
function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > slides.length - 1) {
		numero = 0;
	}
	if (numero < 0) {
		numero = slides.length - 1;
	}
	document.getElementById("slide").src = "./assets/images/slideshow/" + slides[numero].image;

	const slideText = document.getElementById("slide_text");
	let contenu = slideText.innerHTML;
	slideText.innerHTML = slides[numero].tagLine;
}

