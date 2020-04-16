// JavaScript Document

//using querySelector instead of querySelectorAll because there is only one main element in the html file
let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
//selecting input element which takes text as input and storing it in a variable named input
let input = document.querySelector('input[type="text"]');
//error in the spelling of document
let body = document.querySelector('body'); 

submitButton.addEventListener('click', function(e) { 
  e.preventDefault();
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(para);
  body.setAttribute('class', 'meow'); 
  console.log('=^..^='); 
}); 