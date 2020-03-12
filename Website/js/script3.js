var array=[];

document.addEventListener('DOMContentLoaded', function()
	{
		mybutton = document.getElementById("myBtn");
		window.addEventListener('scroll', myFunction);
		var navbar = document.getElementById("navbar");
		var sticky = navbar.offsetTop;
		function myFunction() 
		{
			if (window.pageYOffset >= sticky) {
				navbar.classList.add("sticky")
			} else {
				navbar.classList.remove("sticky");
			}
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
		}
	})

function hover(active){
	active.style.background="#333";
	active.style.color="lightpink";
}

function nothover(active){
	active.style.background="#333";
	active.style.color="white";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) 	
		{slideIndex = 1}
	if (n < 1) 
		{slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) 
		{slides[i].style.display = "none";}
	slides[slideIndex-1].style.display = "block";
}
