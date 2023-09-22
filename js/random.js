// const dieRoll = Math.floor( Math.random() * 6 ) + 1;
// console.log(`You rolled a ${dieRoll}.`);



// Collect input from a user
const inputLow = prompt("Type a low number...");
const inputHigh = prompt("Type a high number. Hurry now!");

// // Convert the input to a number
// // ALTERNATIVE WAY:
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

// const randomNumber = Math.floor (Math.random() * +userNumber) + 1;
// // the +1 feature makes sure the user's number is included in the randomly generated numbers. for example, if the user put 25, it will include 25. if no +1, the numbers generated will be 0-24.

// console.log(typeof +userNumber);

// // Use Math.random() and the user's number to generate a random number 

// // Create a message displaying the random number
// console.log(`${randomNumber} is a random number between 1 and ${userNumber}.`);




if (lowNumber && highNumber) {
    const randomNumber = Math.floor (Math.random() * ( highNumber - lowNumber + 1) ) + lowNumber;
    console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}.`);
} else {
    console.log("You need to provide two numbers, try again slow.");
}