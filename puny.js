

// 1. O MAPA DE SUBSTITUIÇÃO
// Um objeto (dicionário) que mapeia o caractere original (chave)
// para o caractere "falso" (valor).
const homoglyphs = {
    'a': 'а', // 'a' Latino (ASCII) -> 'a' Cirílico (U+0430)
    'e': 'е', // 'e' Latino (ASCII) -> 'e' Cirílico (U+0435)
    'o': 'о', // 'o' Latino (ASCII) -> 'o' Cirílico (U+043E)
    'c': 'с', // 'c' Latino (ASCII) -> 'c' Cirílico (U+0441)
    'p': 'р', // 'p' Latino (ASCII) -> 'p' Cirílico (U+0440)
    'i': 'і', // 'i' Latino (ASCII) -> 'i' Cirílico com ponto (U+0456)
};

function createHomoglyph(text) {
    let result = text;

    for (const char in homoglyphs) {
        
        // Cria uma "Expressão Regular" (RegExp) para encontrar a letra.
        // A flag 'g' (global) é crucial: ela garante que TODAS as 
        // ocorrências da letra sejam substituídas, não apenas a primeira.
        const regex = new RegExp(char, 'g');
        
        // Pega o 'result' atual e aplica a substituição.
       
        result = result.replace(regex, homoglyphs[char]);
    }
    
    return result;
}


// 1. O "usuário" escolhe a palavra
const userInputWord = "administrator";

// 2. Passamos a palavra para a nossa função
const forgedWord = createHomoglyph(userInputWord);

console.log(`Palavra Original: ${userInputWord}`);
console.log(`Palavra Falsificada: ${forgedWord}`);

console.log("---");
console.log(`"google" vira "${createHomoglyph("google")}"`);
console.log(`"apple" vira "${createHomoglyph("apple")}"`);
