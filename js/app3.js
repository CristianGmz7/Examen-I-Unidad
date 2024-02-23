let a, b, c, D;
let x1, x2;

function Discriminante(){
    D = (b*b - a*c*4);
    return D;
}

a = parseFloat(prompt('Ingrese el valor a, coeficiente que acompaña a x2:'));
b = parseFloat(prompt('Ingrese el valor b,  coeficiente que acompaña a x:'));
c = parseFloat(prompt('Ingrese el valor c, constante:'));

Discriminante(a, b, c);

if(D < 0){
    console.log('Con los valores ingresados la ecuacion cuadratica no tiene soluciones reales');
}

if(D === 0){
    x1 = (-b/(a*2));
    console.log(`La ecuacion tiene una unica solucion cuyo resultado:\nx= ${x1}`);
}

if(D > 0){
    x1 = ((-b + Math.sqrt(D)) / (a*2));
    x2 = ((-b - Math.sqrt(D)) / (a*2));
    console.log(`Las soluciones de las ecuaciones son:\nx1=${x1}\nx2=${x2} `);
}

//console.log(`a: ${a}`); //prueba de escritorio
//console.log(`b: ${b}`); //prueba de escritorio
//console.log(`c: ${c}`); //prueba de escritorio
//console.log(`D: ${D}`); //prueba de escritorio