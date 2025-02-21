function fruitCost(fruit, weightGrams, pricePerKg) {
    let weightKg = weightGrams / 1000; // Convert grams to kilograms
    let money = weightKg * pricePerKg; // Calculate total cost
    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}