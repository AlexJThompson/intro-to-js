
function inlinescript(value1) {
	var message = "Hello, World! " + value1;
	alert(message);
}


function inlinescript2(value1) {
	var message = "Hello, World! " + value1;
	return message;
}
var h = inlinescript("Alex Thompson");
alert (h);


function inlinescript3(value1,value2) {
	var msg = "Hello, World! " + value1 + " " + value2;
	return msg;
}
var fname = inlinescript3("Alex", "Thompson");
alert (fname);

//Anon functions:

function (name) {
	return "Hello " + name;
}
var x = nameFn("Alex");
alert(x);