// alert("Keep me Awake");

// function checkdriverage()}
// var age = prompt("What is your age?");
// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }
// var database =[
// {
// username: "Sneha",
// password: "Jujare"
// }]
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElements(){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function addListAfterClick(){
	if (inputLength() > 2){
		createListElements();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0  && event.keyCode === 13){
		createListElements();
			}
}
button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background ="linear-gradient( to right, "
	+color1.value
	+ ","
	+color2.value
	+")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
	