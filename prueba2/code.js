"use strict";

const personas = [
    { edad: 2, sexo: "F" },
    { edad: 30, sexo: "M" },
    { edad: 22, sexo: "F" },
    { edad: 58, sexo: "M" },
    { edad: 27, sexo: "F" },
    { edad: 35, sexo: "M" },
    { edad: 24, sexo: "F" },
    { edad: 33, sexo: "M" },
    { edad: 29, sexo: "F" },
    { edad: 31, sexo: "M" },
    { edad: 26, sexo: "F" },
    { edad: 14, sexo: "M" },
    { edad: 21, sexo: "F" },
    { edad: 32, sexo: "M" },
    { edad: 3, sexo: "M" },
    { edad: 25, sexo: "F" },
    { edad: 30, sexo: "M" },
    { edad: 22, sexo: "F" },
    { edad: 68, sexo: "M" },
    { edad: 27, sexo: "F" },
    { edad: 35, sexo: "M" },
    { edad: 24, sexo: "F" },
    { edad: 3, sexo: "M" },
    { edad: 9, sexo: "F" },
    { edad: 12, sexo: "M" },
    { edad: 60, sexo: "F" },
    { edad: 34, sexo: "M" },
    { edad: 10, sexo: "F" },
    { edad: 17, sexo: "M" },
    { edad: 32, sexo: "M" },
    { edad: 5, sexo: "F" },
    { edad: 30, sexo: "M" },
    { edad: 22, sexo: "F" },
    { edad: 54, sexo: "M" },
    { edad: 27, sexo: "F" },
    { edad: 35, sexo: "M" },
    { edad: 24, sexo: "F" },
    { edad: 33, sexo: "M" },
    { edad: 76, sexo: "F" },
    { edad: 51, sexo: "M" },
    { edad: 89, sexo: "F" },
    { edad: 34, sexo: "M" },
    { edad: 1, sexo: "F" },
    { edad: 14, sexo: "M" },
    { edad: 32, sexo: "M" },
    { edad: 43, sexo: "F" },
    { edad: 34, sexo: "M" },
    { edad: 21, sexo: "F" },
    { edad: 78, sexo: "M" },
    { edad: 32, sexo: "M" },
]

const totalPersonas = personas.length
let mayoresEdad = 0
let menoresEdad = 0
let hombresMayoresEdad = 0
let mujeresMenoresEdad = 0
let numMujeres = 0
let porcentajeMayoresEdad = 0
let porcentajeMujeres = 0


personas.forEach(persona => {
    if(persona.edad >= 18){
        mayoresEdad ++
        if(persona.sexo == 'M'){
            hombresMayoresEdad ++
        }
    } else {
        menoresEdad ++
        if(persona.sexo == 'F'){
            mujeresMenoresEdad ++
        }
    }

    if (persona.sexo == 'F'){
        numMujeres ++
    }
});

porcentajeMayoresEdad = (mayoresEdad/totalPersonas) * 100
porcentajeMujeres = (numMujeres/totalPersonas) * 100

console.log('La cantidad de personas mayores de edad es: ' + mayoresEdad)
console.log('La cantidad de personas menores de edad es: ' + menoresEdad)
console.log('La cantidad de personas masculinas mayores de edad es: ' + hombresMayoresEdad)
console.log('La cantidad de personas femeninas menores de edad es: ' + mujeresMenoresEdad)
console.log('El porcentaje de mayores de edad es: ' + porcentajeMayoresEdad + '%')
console.log('El porcentaje de mujeres es: ' + porcentajeMujeres+ '%')

