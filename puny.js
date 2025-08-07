const word = "admin";

// substitui o 'a' ASCII pela letra 'а' cirílica (U+0430)
const replaced = word.replace(/a/g, 'а');  // <-- isso é o 'a' cirílico (vem do alfabeto grego e burla o a convencional)

console.log(replaced);  // visualmente: "admin", mas não é o mesmo o 