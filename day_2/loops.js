//For loop:

//for (var i=0; i<10; i++){
	//console.log(i);
//}

//While loop:

//var x =0;
//while(x<10){
	//x++;
//}

//do while loop:

//var x = 2;
//do {
	//console.log("function");

//} while(x<6);

//Fall in loop:

//var MyArray = [6, 2, 8, 9, 15];
//for(var x in MyArray){
	//console.log(x);
//}

//var MyArray=[3, 7, "hi", 67, 5];

//function ArrayLoop(array1){
//	for (var i=0; i<MyArray.length; i++){
		//alert(MyArray[i]);
//	}
//}

//ArrayLoop(MyArray);


//function ArrayForLoop(array2){
//	var i = 0;
//	while(i<MyArray.length){
//		alert(MyArray[i]);
//		i++;
//	}
//}

//ArrayForLoop(MyArray);


//function ArrayForInLoop(array3){
//	for(var i in MyArray){
//	alert(MyArray[i]);
//	}
//}

 var computerWins = 0;
 var userWins = 0;
 function myChoice() {
	var choice = prompt("Enter rock, paper or scissors");
	alert(choice);
	return choice;
 }


function myComputerChoice() {
	var computerChoice = Math.floor(Math.random()*3);
	if (computerChoice == 0) {
		alert("rock");
	} else if (computerChoice == 1) {
		alert("paper");
	} else if (computerChoice == 2) {
		alert("scissors");
	}
	return computerChoice;
}

function winLogic(choice, computerChoice) {
	if(choice === "rock" && computerChoice === 0) {
 			alert("draw");
  } else if (choice === "rock" && computerChoice === 1) {
         	alert("paper wins");
            computerWins++;
  } else if (choice === "rock" && computerChoice === 2) {
            alert("rock wins");
            computerWins++;
  } else if (choice === "paper" && computerChoice === 0) {
            alert("paper wins");
           userWins++;

 } else if (choice === "paper" && computerChoice === 1) {
            alert("paper wins");
            userWins++;

 } else if (choice === "paper" && computerChoice === 2) {
            alert("draw");

 } else if (choice === "scissors" && computerChoice === 0) {
            alert("rock wins");
            computerWins++;

 } else if (choice === "scissors" && computerChoice === 1) {
            alert("scissors wins");
            computerWins++;

 } else if (choice === "scissors" && computerChoice === 2) {
            alert("draw");
            userWins++;
       }
}

var gameCounter = 0;
while (gameCounter<5){
	
	var playerChoice = myChoice();
	var computerChoice = myComputerChoice();
	winLogic(playerChoice, computerChoice);

 gameCounter++;
}
 
 if(computerWins > userWins){
 	alert("Computer Wins");
 } else if(computerWins == userWins){
 	alert("Draw")
 } else {
 	alert("User Wins");
 }
