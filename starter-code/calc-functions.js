// var loop = "y";
// while (loop == "y") {
// 	var calcType = (prompt('which calcuator: normal, BMI or Mortgage'));







// 		loop = prompt ("Do you want to try again? y/n?")
// }
var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (r)oot (p)ower') || "a";
/*
if(calcType == "normal") {
		// Calculator

		if(choice == "a" || choice == "s" || choice == "m" || choice == "d") {
			var value1 = parseFloat(prompt('enter first value')); 
			var value2 = parseFloat(prompt('enter the second value'));
		} else if (choice == "r") {
			var value1 = parseFloat(prompt("enter value"));
		} else if (choice == "p") {
			var value1 = parseFloat(prompt("enter base"));
			var value2 = parseFloat(prompt("enter power"));
		}
			
}
*/

var loop = "y";
while (loop == "y") {
		switch (choice) {
			case "a":
				addition();
				break;
			case "s":
				subtraction();
				break;
			case "m":
				multiplication();
				break;
			case "d":
				division();
				break;
			case "r":
				root();
				break;
			case "p": 
				power();
			default:
				alert("Please enter a,s,m or d");
		}

function getCalcType() {
	var input = prompt("which calcuator: normal, BMI or Mortgage");
	return input;
}


function addition() {
	var value1 = parseFloat(prompt("Enter your first value"));
	var value2 = parseFloat(prompt("Enter your second value"));
	alert(value1 + value2);
}


function subtraction() {
	var value1 = parseFloat(prompt("Enter your first value"));
	var value2 = parseFloat(prompt("Enter your second value"));
	alert(value1 - value2);
}


function multiplication() {
	var value1 = parseFloat(prompt("Enter your first value"));
	var value2 = parseFloat(prompt("Enter your second value"));
	alert(value1 * value2);
}


function division() {
	var value1 = parseFloat(prompt("Enter your first value"));
	var value2 = parseFloat(prompt("Enter your second value"));
	alert(value1 / value2);
}


function root() {
	var value1 = parseFloat(prompt("Enter a value"));
	alert(Math.sqrt(value1));
}


function power() {
	var value1 = parseFloat(prompt("Enter your first value"));
	var value2 = parseFloat(prompt("Enter your second value"));
	alert(Math.pow(value1, value2));
}

loop = prompt ("Do you want to try again? y/n?")
}