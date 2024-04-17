alert("Bienvenido al calculador de gastos e ingresos");

let opcion;
let ingreso;
let gasto;
let total;
let gastoTotal=0;
let ingresoTotal=0;



do {
    opcion = parseInt(prompt("Ingrese la opcion que quiera: \n\n1. Ingresar gasto \n2. Ingresar ingreso \n3. calcular el total \n0.Salir"));
    switch (opcion) {
        case 1:
            gasto = parseInt(prompt("Ingrese el gasto hecho: "));
            gastoTotal = gastoTotal + gasto;
            alert("Su gasto es de: " + gastoTotal);
            break;
        case 2:
            ingreso = parseInt(prompt("Ingrese el gasto hecho: "));
            ingresoTotal = ingresoTotal + ingreso;
            alert("Su ingreso es de: " + ingresoTotal);
            break;
        case 3:
            total = ingresoTotal - gastoTotal;
            alert("El resultado entre el ingreso y el gasto es de: " + total);
            ingresosBuenosMalos(total);
            break;
    }
} while (opcion != 0);


function ingresosBuenosMalos(total){
    if(total>=0){
        alert("Estas ATR");
    }else{
        alert("estas en bancarrota");
    }
}