module.exports = function (result, expected, message) {
    var success = true;
    
    if (Array.isArray(result) && Array.isArray(expected)) {
        for (var i = 0; i < result.length && i < expected.length; i++) {
            if (result[i] !== expected[i]) {
                success = false;
                break;
            }
        }
    } else if (result !== expected) {
        success = false;
    }
    
    if (success) {
        console.log('Test success: got ' + result);
    } else if (message) {
        console.error(message);
    } else {
        console.error('Test error: expected ' + expected + '; got ' + result);
    }
    
    return success;
};
