"use strict";

const horasEstandar = 40
const horasTrabajadas = 45
const tarifa = 10
const bonificacion = 1.5
let salario = 0

if(horasTrabajadas <= horasEstandar){
    salario = horasTrabajadas * tarifa
} else {
    salario = tarifa * horasEstandar + ((horasTrabajadas - horasEstandar) * (tarifa * bonificacion))
}


console.log('El salario es:' + salario)