function sumDigits(number) {
    return Math.abs(number) // Convert to positive to handle negatives
        .toString() // Convert number to string
        .split('') // Split into individual characters
        .reduce((sum, digit) => sum + Number(digit), 0); // Sum up digits
}