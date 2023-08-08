function plusOne(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    // If we reach here, it means we need to add a new digit
    digits.unshift(1);
    return digits;
}
