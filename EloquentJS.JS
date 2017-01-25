//Eloquent JS challenges

//challenge 1
var triangle = "";

for(var i = 0; i < 8; i++){
  triangle += "#";
  console.log(triangle);
}

//challenge 2

for (var i = 1; i <= 100; i++) {
  var output = "";
  if (i % 3 == 0)
    output += "Fizz";
  if (i % 5 == 0)
    output += "Buzz";
  console.log(output || i);
}

//challenge 3

var size = 8; //board size

var board = "";

for (var y = 0; y < size; y++) { //if less than 8
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n"; //new line
}

console.log(board); //log the board
