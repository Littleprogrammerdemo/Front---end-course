function sameNumbers(number) {
    let numString = number.toString(); // Convert number to a string
    let sum = 0; // Initialize sum of digits
    let firstDigit = numString[0]; // Get the first digit
    
    // Check if all digits are the same
    let areSame = numString.split('').every(digit => digit === firstDigit);

    // Calculate the sum of digits
    for (let digit of numString) {
        sum += Number(digit);
    }
    
    console.log(areSame); // Output true or false
    console.log(sum); // Output sum of digits
}
