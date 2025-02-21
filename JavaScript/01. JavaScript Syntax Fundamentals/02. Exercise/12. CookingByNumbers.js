function cookingByNumbers(start, ...operations) {
    let number = Number(start); // Parse the starting number to a number

    // Define operations
    operations.forEach(operation => {
        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.2;
                break;
        }
        console.log(number); // Print result after each operation
    });
}
