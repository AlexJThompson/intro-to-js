
var loop = "y";
while (loop == "y") {
	var calcType = (prompt('which calcuator: normal, BMI or Mortgage'));

	if(calcType == "normal") {
		// Calculator
		var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (r)oot (p)ower') || "a";

		if(choice == "a" || choice == "s" || choice == "m" || choice == "d") {
			var value1 = parseFloat(prompt('enter first value')); 
			var value2 = parseFloat(prompt('enter the second value'));
		} else if (choice == "r") {
			var value1 = parseFloat(prompt("enter value"));
		} else if (choice == "p") {
			var value1 = parseFloat(prompt("enter base"));
			var value2 = parseFloat(prompt("enter power"));
		}
			

		switch (choice) {
			case "a":
				alert(value1 + value2);
				break;
			case "s":
				alert(value1 - value2);
				break;
			case "m":
				alert(value1 * value2);
				break;
			case "d":
				alert(value1 / value2);
				break;
			case "r":
				alert(Math.sqrt(value1));
				break;
			case "p": 
				alert(Math.pow(value1, value2));
			default:
				alert("Please enter a,s,m or d");
		}
	} else if(calcType == "BMI"){
		//BMI Calc
		var weight = parseFloat(prompt("Enter your weight in Kg"));
		var height = parseFloat(prompt("Enter your height in m"));
		var BMI = weight / (height*height);
		alert("This is your BMI: " + BMI);
	} else if(calcType == "Mortgage"){
		//Mortgage Calc
		var L = parseFloat(prompt("Enter your required loan amount"));
		var c = parseFloat(prompt("Enter your monthly interest rate"));
		var n = parseFloat(prompt("Enter the number of months in the loan"));
		var A = Math.pow((1 + c), n);
		var B = A * c;
		var C = A - 1;
		var D = B / C;
		var Mortgage = L * D;
		alert("This is your Mortgage: " + Mortgage);
	} else {
		alert("acceptable inputs are: BMI, normal or mortgage");
	}
	loop = prompt ("Do you want to try again? y/n?")
}
