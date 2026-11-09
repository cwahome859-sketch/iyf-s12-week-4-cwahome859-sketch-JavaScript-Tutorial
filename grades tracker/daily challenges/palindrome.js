const word ="madam";

const reversedWord =word.split("").revers().join("");

if (word === reversedWord) {
    console.log("it is a palindrome");   
} else {
    console.log("it is not a palindrome");
}

function isPalindrome(word) {
    const reversed =word.split("").reverse().join("");
    return word === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("leve"));