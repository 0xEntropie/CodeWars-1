/*
 Original Problem:
 You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

 Example:

 longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

 n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 */

function longestConsecDraft(strarr, k) {
    var l = strarr.length;
    
    // Check if lengths are valid
    if (l == 0 || k > l || k <= 0) {
        return '';
    }
    
    // Save latest and the longest word
    var latest;
    var longest;
    var length = 0;
    
    for (var i = 0; i < strarr.length; i++) {
        var str = strarr[i];
        
        // If first one, assign as default value
        if (!latest) {
            latest = str;
            longest = [str];
            length = str.length;
            continue;
        }
        
        // Concat strings
        var long = longest;
        
        while (long.length > k) {
            long.shift();
        }
        
        var result = long.join('') + str;
        
        // Check if this is longer than the previous
        if (result.length > length) {
            long.push(str);
            longest = long;
        }
        
        // Set the latest word as this
        latest = str;
    }
    
    return longest.join('HERE');
}

function longestConsec(strarr, k) {
    var l = strarr.length;

    // Check if lengths are valid
    if (l == 0 || k > l || k <= 0) {
        return '';
    }

    // Save latest and the longest word
    var latest;
    var longest;
    
    for (var wIndex = 0; wIndex < strarr.length; wIndex++) {
        var word = strarr[wIndex];
        
        if (!longest) {
            latest = [word];
            longest = word;
            continue;
        }
        
        var last = latest;
        
        // Get lastest k elements
        if (last.length >= k) {
            last = last.slice(-k + 1);   
        }
        
        last.push(word);
        
        var result = last.slice(-k).join('');
        
        if (result.length > longest.length) {
            longest = result;
        }

        latest = last;
    }
    
    return longest;
}

console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));
console.log(longestConsec(["A4","Ba5sd","As1df", 'Asdfasdf2asdfa', 'Asdf3asdf', 'Asd'], 2));
console.log(longestConsec(["Itvayl3oxrp","As2df","B1"], 2));
console.log(longestConsec(["a3","a4","aas5df"], 1));
