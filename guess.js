// let random = Math.ceil(Math.random())
// let input=document.getElementById("input")
// let result=document.getElementById("result")
// let score=document.getElementById("score")
// let count = 0;

// function guessbtn(){
//     count++;
//     if(input.value==random){
//         result.textContent="Congratulations! Your guess is correct."
//         result.style.color="green"
//         score.textContent="no of chances used: " + count;
//     }else if(input.value<random){
//         result.textContentL="Try again! The number is higher."
//         result.style.color="red"
//     }else{
//         result.textContent="Try again! The number is lower."
//         result.style.color="red"
//     }
// }

// let random = Math.ceil(Math.random() ); // generates number 1–100
// let input = document.getElementById("input");
// let result = document.getElementById("result");
// let score = document.getElementById("score");
// let count = 0;

// function guessbtn() {
//     let userGuess = Number(input.value); // convert input to number
//     count++;

//     if (userGuess === random) {
//         result.textContent = " Congratulations! Your guess is correct.";
//         result.style.color = "green";
//         score.textContent = "No. of chances used: " + count;
//     } else if (userGuess < random) {
//         result.textContent = "Try again! The number is higher.";
//         result.style.color = "red";
//         // score.textContent = "Attempts: " + count;
//     } else if (userGuess > random) {
//         result.textContent = " Try again! The number is lower.";
//         result.style.color = "red";
//         // score.textContent = "Attempts: " + count;
//     } else {
//         result.textContent = " Please enter a valid number!";
//         result.style.color = "orange";
//     }
// }

let random = Math.ceil(Math.random() * 100); // generates number 1–100
let input = document.getElementById("input");
let result = document.getElementById("result");
let score = document.getElementById("score");
let count = 0;

function guessbtn() {
    let userGuess = Number(input.value); // convert input to number
    count++;

    if (userGuess === random) {
        result.textContent = " Congratulations! Your guess is correct.";
        result.style.color = "green";
        score.textContent = "No. of chances used: " + count;
    } else if (userGuess < random) {
        result.textContent = "Too low! Try again.";
        result.style.color = "red";
        score.textContent = "Attempts: " + count;
    } else if (userGuess > random) {
        result.textContent = " Too high! Try again.";
        result.style.color = "red";
        score.textContent = "Attempts: " + count;
    } else {
        result.textContent = "Please enter a valid number!";
        result.style.color = "orange";
    }
}


   