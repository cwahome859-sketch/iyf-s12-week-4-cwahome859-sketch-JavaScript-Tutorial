
// Array of numbers
const numbers = [10, 25, 8, 45, 67, 32, 90, 15];


let largest = numbers[0];


for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}


console.log("The largest number is:", largest);
