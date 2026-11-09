// JavaScript Calculator

const calculator = {
    // Addition
    add(a, b) {
        return a + b;
    },

    // Subtraction
    subtract(a, b) {
        return a - b;
    },

    // Multiplication
    multiply(a, b) {
        return a * b;
    },

    // Division
    divide(a, b) {
        if (b === 0) {
            return "Error: Cannot divide by zero!";
        }
        return a / b;
    },

    // Modulus
    modulus(a, b) {
        if (b === 0) {
            return "Error: Cannot divide by zero!";
        }
        return a % b;
    },

    // Exponentiation
    power(a, b) {
        return a ** b;
    },

    // Main calculation method
    calculate(a, operator, b) {
        if (!Number.isFinite(a) || !Number.isFinite(b)) {
            return "Error: Invalid numbers!";
        }

        switch (operator) {
            case "+":
                return this.add(a, b);

            case "-":
                return this.subtract(a, b);

            case "*":
                return this.multiply(a, b);

            case "/":
                return this.divide(a, b);

            case "%":
                return this.modulus(a, b);

            case "**":
                return this.power(a, b);

            default:
                return "Error: Invalid operator!";
        }
    }
};

// Testing the calculator

console.log("Addition:", calculator.calculate(10, "+", 5));

console.log("Subtraction:", calculator.calculate(10, "-", 5));

console.log("Multiplication:", calculator.calculate(10, "*", 5));

console.log("Division:", calculator.calculate(10, "/", 5));

console.log("Modulus:", calculator.calculate(10, "%", 3));

console.log("Power:", calculator.calculate(2, "**", 3));

console.log("Division by zero:", calculator.calculate(10, "/", 0));