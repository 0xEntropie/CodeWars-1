function countBits(number) {
    // Convert decimal to binary string using bitshifting operator
    var binary = (number >>> 0).toString(2);
    var results = 0;
    
    // Loop through all the chars
    for (var i = 0; i < binary.length; i++) {
        if (binary.charAt(i) === '1') {
            results++;
        }
    }
    
    return results;
}
