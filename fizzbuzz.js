var loop = "y";
while (loop == "y") {


var n = parseFloat(prompt("enter any integer"));

if (n % 3 == 0 && n % 5 == 0){
	alert("Fizzbuzz");
} else if (n % 3 == 0){
	alert("Fizz");
} else if (n % 5 == 0){
	alert("Buzz");
} else {
	alert(n);
}

loop = prompt ("Do you want to try again? y/n?")
}