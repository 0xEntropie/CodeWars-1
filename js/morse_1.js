/*
 Original Problem:
 In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
 The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

 NOTE: Extra spaces before or after the code have no meaning and should be ignored.

 In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

 Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.

 For example:

 decodeMorse('.... . -.--   .--- ..- -.. .')
 //should return "HEY JUDE"
 The Morse code table is preloaded for you as MORSE_CODE dictionary, feel free to use it. In Java, the table can be accessed like this: MorseCode.get('.--'). In C#, the preloaded Dictionary can be accessed like this: MorseCode.Get('.--');.

 All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions.
 In C#, tests will fail if the solution code throws an exception. Please keep that in mind. (This is mostly because else the engine would simply ignore the tests, resulting in a "valid" solution.)
 */

// NOTE: The problem already gives us a MORSE_CODE Json object to convert chars
// This problem won't work as it is right now, but it works in codewars.com

// TODO Fix when one letter / one word only

function decodeMorse(morseCode) {
    var words = morseCode.split('   ');
    var result = '';
    
    for (var i = 0; i < words.length; i++) {
        var letters = words[i].split(' ');
        
        for (var j = 0; j < letters.length; j++) {
            result += MORSE_CODE[letters[j]];
        }
        
        if (i != words.length - 1) {
            result += ' ';
        }
    }
    
    return result;
}

// Cannot be tested
decodeMorse('.... ...');