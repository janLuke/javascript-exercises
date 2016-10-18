/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var target;
var input;
var response;
var guesses;
var DEFAULT_MSG = "I'm waiting...";


function randInt(min, max){
    rnd = Math.random() * (max-min) + min;
    return Math.round(rnd);
}

function newGame(){
    console.log("Start a new game");
    target = randInt(0, 100);
    input = document.getElementById("input_text");
    response = document.getElementById("response");
    guesses = 0;
    
    input.value = "";
    input.disabled = false;
    response.innerHTML = DEFAULT_MSG;
    response.className = "valid";
    
    console.log("Target is " + target);
}

function output(msg, cssClass) {
    response.innerHTML = msg;
    response.className = cssClass;
}


function onInput(){
    var v = input.value;
    console.log("Input: " + v);
    if (isNaN(v)) {
        output("Are you fucking kidding me!? Enter a NUMBER! NOW!",
               "invalid");
    }
    else { // Is a Number
        var n = parseInt(v);
        if  (!(n === parseFloat(v)) || (n > 100 || n < 1)) {
            output("The number must be an integer between 1 and 100!",
                   "invalid");
        }
        else { // Is a valid number
            guesses += 1;
            if(n < target) {
                output(n + " is too low!", "valid");
            }
            else if(n > target) {
                output(n + " is too high!", "valid");
            }
            else {
                output("Alleluia! Guessed in " + guesses + " guesses.",
                        "rightAnswer");
                input.disabled = true;
            }
        }
    }
    input.value = "";
    return false;
}