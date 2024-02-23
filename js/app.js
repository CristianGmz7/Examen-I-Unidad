// function ingresardatosempleado(nombre, sueldobase, deduIHSS, deduINFOP, adelanto, prestamo, totalempleado){
//     let nombre = prompt('Ingrese el nombre del empleado:');
//     let sueldobase = parseFloat(prompt('Ingrese el sueldo base del empleado:'));
//     let deduIHSS = sueldobase * 0.035;
//     let deduINFOP = sueldobase * 0.015;
//     let adelanto = parseFloat(prompt('Ingrese el adelanto del empleado:'));
//     let prestamo = parseFloat(prompt('Ingrese el prestamo del empleado:'));
//     let totalempleado = sueldobase - deduIHSS - deduINFOP - adelanto - prestamo;
//     return nombre, sueldobase, deduIHSS, deduINFOP, adelanto, prestamo, totalempleado;
// }

const numeroempleados = prompt('Ingrese la cantidad de empleados a pagar:')

// const planilla = {
//     numeroPlanilla: prompt('Ingrese el nombre de la planilla. Ejemplo: FEB-01-2024'),
//     nombreEmpresa: prompt('Ingrese el nombre de la empresa'),
//     listaempleados: function(nombre, sueldobase, deduIHSS, deduINFOP, adelanto, prestamo, totalempleado){
        
//         for(let i = 0; i < n ; i++){
            
//             this.nombre = nombre;
//             this.sueldobase = sueldobase;
//             this.deduIHSS = deduIHSS;
//             this.deduINFOP = deduINFOP;
//             this.adelanto = adelanto;
//             this.prestamo = prestamo;
//             this.totalempleado = totalempleado;
//         }
        
//     },
// }

const planilla = {
    numeroPlanilla: prompt('Ingrese el nombre de la planilla. Ejemplo: FEB-01-2024'),
    nombreEmpresa: prompt('Ingrese el nombre de la empresa'),
    listaempleados: [],
}



let nombre, sueldobase, deduIHSS, deduINFOP, adelanto, prestamo, totalempleado
for (let i = 0; i < n; i++) {
    
}

console.log(`Nombre planilla: ${planilla.numeroPlanilla}`);     //prueba escritorio
console.log(`Nombre empresa: ${planilla.nombreEmpresa}`);   //prueba escritorio
console.log(`Numero de empleados: ${numeroempleados}`);   //prueba escritorio

console.log(`Nombre de empleado: ${listaempleados.nombre}`);   //prueba escritorio
console.log(`Sueldo base del empleado: L ${listaempleados.sueldobase}`);   //prueba escritorio
console.log(`Deducciones del IHSS: L ${listaempleados.deduIHSS}`);   //prueba escritorio
console.log(`Deducciones del INFOP: L ${listaempleados.deduINFOP}`);   //prueba escritorio
console.log(`Adelanto del empleado: L ${listaempleados.adelanto}`);   //prueba escritorio
console.log(`Prestamo del empleado: L ${listaempleados.prestamo}`);   //prueba escritorio
console.log(`Total a pagar al empleado: L ${listaempleados.totalempleado}`);   //prueba escritorio