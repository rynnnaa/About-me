'use strict';
// testing
// testing

//testing
console.log('userName', userName);

var userName = prompt('Welcome to the site. What is your name?');
alert(' Nice to meet you ' + userName + '.');
console.log('userName', userName);

alert('please respond to the following five questions with yes or no');

console.log('candy', candy);
var candy = prompt('Do I like candy?');
var res = candy.toLowerCase()
console.log('candy', candy);
if (candy === 'yes') {
  alert(' Nope!');
}
else if (candy === 'no') {
  alert(' Correct!');

}

console.log('color', color);
var color = prompt('Is my favorite color blue?');
var res = color.toLowerCase()
console.log('color', color);
if (color === 'yes') {
  alert(' Sure is!');
}
else if (candy === 'no') {
  alert(' Wrong!');
}
console.log('height', height);
var height = prompt('Am I six feet tall?');
var res = height.toLowerCase()
console.log('height', height);
if (height === 'yes') {
  alert(' Nope, almost six foot.');
}
else if (height === 'no') {
  alert(' I didnt make the six foot club. ')
}


console.log('pie', pie);
var pie = prompt(' Do I like apple pie?');
var res = pie.toLowerCase()
console.log('pie', pie);
if (pie === 'yes') {
  alert(' Sure is!');
}
else if (height === 'no') {
  alert(' Wrong ')
}

console.log('hand', hand);
var hand = prompt(' Am I left handed? ');
var res = hand.toLowerCase()
console.log('hand', hand);
if (hand === 'yes') {
  alert(' I am not left handed.');
}
else if (height === 'no') {
  alert(' Correct ')
}


var favoriteNumber = 3
var counter = 0
console.log('numberGuess', numberGuess);
var numberGuess = parseInt(prompt(' What is my favorite number? You have four guesses '));
console.log('numberGuess', numberGuess);

while (numberGuess !== favoriteNumber && counter < 3) {
  counter++;

  // if (numberGuess === 3) {
  //   alert('Correct')
  }
  if (numberGuess > favoriteNumber) {
    parseInt(alert(' Close, a little lower!'));
  }
  else if (numberGuess < 3) {
    parseInt(alert(' Close, a little higher!'));
  // } else{
  //   numberGuess = parseInt(prompt( 'correct'));
  }
  // else(alert( 'Correct'));
  //  if (numberGuess === 3){
  //     alert( 'Correct')

// numberGuess = parseInt(prompt(numberGuess + ' is not a number'));

    // else(numberGuess){
    //     alert( 'Correct')
// }








// console.log('numberGuess', numberGuess);
// var favoriteNumber = 3
// var numberGuess  = prompt(' What is my favorite number? ');
// console.log('numberGuess', numberGuess);

// if (numberGuess === 3){
//     alert( 'correct')
// }
// else if ( numberGuess > 3){
// alert( ' Close, a little lower!')
// }
// else if ( numberGuess < 3){
//     alert( ' Close, a little higher!')
//     }
//     numberGuess = 
// if (i++ ===  ) break;

// var counter = 0;
// while (counter <= 10) {
//   console.log(counter);
//   counter++;
