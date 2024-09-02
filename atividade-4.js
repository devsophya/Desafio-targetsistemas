// a) Sequência de números ímpares
let sequenceA = [1, 3, 5, 7];
let nextA = sequenceA[sequenceA.length - 1] + 2; // 7 + 2 = 9
console.log("Próximo número de (a):", nextA); // 9

// b) Sequência de potências de 2
let sequenceB = [2, 4, 8, 16, 32, 64];
let nextB = sequenceB[sequenceB.length - 1] * 2; // 64 * 2 = 128
console.log("Próximo número de (b):", nextB); // 128

// c) Sequência de quadrados
let sequenceC = [0, 1, 4, 9, 16, 25, 36];
let nextC = Math.pow(sequenceC.length, 2); // 7^2 = 49
console.log("Próximo número de (c):", nextC); // 49

// d) Sequência de quadrados de números pares
let sequenceD = [4, 16, 36, 64];
let nextD = Math.pow((sequenceD.length + 1) * 2, 2); // 10^2 = 100
console.log("Próximo número de (d):", nextD); // 100

// e) Sequência de Fibonacci
let sequenceE = [1, 1, 2, 3, 5, 8];
let nextE = sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2]; // 8 + 5 = 13
console.log("Próximo número de (e):", nextE); // 13

// f) Sequência de números com incrementos variados
let sequenceF = [2, 10, 12, 16, 17, 18, 19];
let nextF = sequenceF[sequenceF.length - 1] + 1; // 19 + 1 = 20
console.log("Próximo número de (f):", nextF); // 20
