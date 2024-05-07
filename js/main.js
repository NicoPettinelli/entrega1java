alert("bienvenido al calculador de gastos");

const misGastos=[];

class Gastos{
    constructor(nombreGasto,monto){
        this.nombreGasto= nombreGasto;
        this.monto= monto;
    };
};

function mostrarGastos(){
    let gasto= "Gasto: \n";

    if(misGastos==0){
        alert("no hay gasto");
    }else{
        misGastos.forEach(el => {
            gasto += el.nombreGasto + " $" + el.monto + "\n"
        })
        alert(gasto);
    }
   

}

function ingresarGasto(){
    const nuevoNombreGasto= prompt("Ingrese el nombre del gasto");
    const nuevoMonto= parseInt(prompt("Ingrese el monto del gasto"));

    const nuevoGasto = new Gastos(nuevoNombreGasto,nuevoMonto);

    misGastos.push(nuevoGasto);

    alert("Ingresado el gasto " + nuevoNombreGasto + " por $" + nuevoMonto);
}

let opcion;

function sumaGastos(){
    const sumatoriaGastos= misGastos.reduce((acumulador,el) => acumulador += el.monto, 0);

    alert("el total de sus gastos es de $" + sumatoriaGastos);
}

do{

    opcion= parseInt(prompt("Ingrese la opcion: \n\n1.Ingresar gasto \n2.Mostrar gastos \n3.Calcular total del gasto \n0.Salir"));
    switch (opcion) {
        case 1:
            ingresarGasto();
            break;
        case 2:
            mostrarGastos();
            break;
        case 3:
            sumaGastos();
            break;
        case 0:
            alert("nos vemos luego");
            break;
    
        default:
            alert("Error al elegir la opcion");
            break;
    }


}while(opcion!=0);