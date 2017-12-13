var MyName = "Alex";
var MyGender = "Female";
var MyAge = 8;

function MyScope(name, gender) {
	var age = 6;
	console.log("my name is " +name +" and I am a " +gender);
	function MyInnerScope(name, gender){
		var age = 7;
		console.log("my name is " +name +" and I am a " +gender +" from Innerscope");

	}
	MyInnerScope(name, gender);
}


MyScope(MyName, MyGender, MyAge);