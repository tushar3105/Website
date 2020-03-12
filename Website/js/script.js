var array=[];

document.addEventListener('DOMContentLoaded', function() 
	{
		window.addEventListener('scroll', myFunction);
		mybutton = document.getElementById("myBtn");
		var navbar = document.getElementById("navbar");
		var sticky = navbar.offsetTop;
		function myFunction() {
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

function init(){
	if(localStorage.ab)
	{
		array=JSON.parse(localStorage.ab);
		for(var i=0;i<array.length; i++)
		{
			var Name =array[i].name;
			var Skill=array[i].skill;
			var Level=array[i].level;
			var Comments=array[i].comments;
			table(Name,Skill,Level,Comments);
		}
	}
}

function testVariable(){
	var Name =document.getElementById("name").value ; 
	var Skill=document.getElementById("skill").value;
	var Level=document.getElementById("level").value;
	var Comments=document.getElementById("comments").value;
	var obj= {name:Name,skill:Skill,level:Level,comments:Comments}
	array.push(obj);
	localStorage.ab = JSON.stringify(array);
	table(Name,Skill,Level,Comments);
}

function table(Name,Skill,Level,Comments){               
	var table=document.getElementById("mytable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4=row.insertCell(3);
	cell1.innerHTML = Name;
	cell2.innerHTML = Skill;
	cell3.innerHTML = Level;
	cell4.innerHTML=Comments;
}

function hover(active){
	active.style.background="#333";
	active.style.color="lightpink";
}

function nothover(active){
	active.style.background="#333";
	active.style.color="white";
}

function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
