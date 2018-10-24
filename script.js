'use strict';

console.log('userName', userName);

var userName = prompt('Welcome to the site. What is your name?');
    alert(' Nice to meet you ' + userName + '.'); 
     console.log('userName', userName);

alert('please respond to the following questions with yes or no');

console.log('candy', candy);
var candy  = prompt('Do I like candy?');
var res = candy.toLowerCase()
console.log('candy', candy);
if (candy === 'yes')
{
alert(' Nope!');
}       
else if (candy === 'no') {
alert(' Correct!');

}   

console.log('color', color);
var color  = prompt('Is my favorite color blue?');
var res = color.toLowerCase()
console.log('color', color);
if (color === 'yes')
{
alert(' Sure is!');
}       
else if (candy === 'no') {
alert(' Wrong!');
}
console.log('height', height);
var height  = prompt('Am I six feet tall?');
var res = height.toLowerCase()
console.log('height', height);
if (height === 'yes')
{
alert(' Nope, almost six foot.');
}       
else if (height === 'no') {
alert(' I didnt make the six foot club. ')
}


console.log('pie', pie);
var pie  = prompt(' Do I like apple pie?');
var res = pie.toLowerCase()
console.log('pie', pie);
if (pie === 'yes')
{
alert(' Sure is!');
}       
else if (height === 'no') {
alert(' Wrong ')
}

console.log('hand', hand);
var hand  = prompt(' Am I left handed? ');
var res = hand.toLowerCase()
console.log('hand', hand);
if (hand === 'yes')
{
alert(' I am not left handed.');
}       
else if (height === 'no') {
alert(' Correct ')
}