
// Array containing duplicate numbers
const numbers = [2, 9, 24, 40, 3, 9, 24, 2, 50, 40];

// Empty array to store unique numbers
let uniqueNumbers = [];

// Loop through the original array
for (let i = 0; i < numbers.length; i++) {

    // Check if the number already exists
    if (!uniqueNumbers.includes(numbers[i])) {

        // Add number if it does not exist
        uniqueNumbers.push(numbers[i]);
    }
}

// Display results
console.log("Original Array:", numbers);
console.log("Array without duplicates:", uniqueNumbers);
