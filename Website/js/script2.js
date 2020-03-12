function hover(active){
	active.style.background="#333";
	active.style.color="lightpink";
}

function nothover(active){
	active.style.background="#333";
	active.style.color="white";
}

document.addEventListener('DOMContentLoaded', function() 
	{
		mybutton = document.getElementById("myBtn");
		if (localStorage.clickcount) 
		{
			localStorage.clickcount = Number(localStorage.clickcount)+1;
		} 
		
		else 
		{
			localStorage.clickcount = 1;
		}
		
		document.getElementById("result").innerHTML = "Visitor Count:" +localStorage.clickcount;
		window.addEventListener('scroll', myFunction);
		var navbar = document.getElementById("navbar");
		var sticky = navbar.offsetTop;
		function myFunction() 
		{
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
			if (window.pageYOffset >= sticky) {
				navbar.classList.add("sticky")
			} else {
				navbar.classList.remove("sticky");
			}
		}
	})

mybutton = document.getElementById("myBtn");

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
