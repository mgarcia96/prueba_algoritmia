"use strict";

const number = 15
let txtRes = ''

if (number % 2 === 0) {
    txtRes += 'Número par '
    for (let i = number; i >= 0; i -= 2) {
        txtRes += i + " ";
    }
} else {
    txtRes += 'Número impar '
    for (let i = number; i >= 1; i -= 2) {
        txtRes += i + " ";
    }
}

console.log(txtRes)
