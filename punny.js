// The homoglyph map (same as before)
const homoglyphs = {
    'a': 'а', // 'a' Latin (ASCII) -> 'a' Cyrillic (U+0430)
    'e': 'е', // 'e' Latin (ASCII) -> 'e' Cyrillic (U+0435)
    'o': 'о', // 'o' Latin (ASCII) -> 'o' Cyrillic (U+043E)
    'c': 'с', // 'c' Latin (ASCII) -> 'c' Cyrillic (U+0441)
    'p': 'р', // 'p' Latin (ASCII) -> 'p' Cyrillic (U+0440)
    'i': 'і'  // 'i' Latin (ASCII) -> 'i' Cyrillic with dot (U+0456)
};

// The substitution function (same as before)
function createHomoglyph(text) {
    let result = text;
    for (const char in homoglyphs) {
        // Create a RegExp to find the character
        // The 'g' (global) flag ensures ALL occurrences are replaced.
        const regex = new RegExp(char, 'g');
        result = result.replace(regex, homoglyphs[char]);
    }
    return result;
}


// [0] = 'node' (the program executable)
// [1] = 'your-script-name.js' (the path to the script)
// [2] = The first argument the user provides
const userInputWord = process.argv[2];

// Check if the user actually provided an argument
if (!userInputWord) {
    console.log("Error: You must provide a word.");
    console.log("Usage: node your-script-name.js <word>");
} else {
    // Process the word passed as an argument
    const forgedWord = createHomoglyph(userInputWord);
    
    // Print the result to the console
    console.log(`Original: ${userInputWord}`);
    console.log(`Forged:   ${forgedWord}`);
}
