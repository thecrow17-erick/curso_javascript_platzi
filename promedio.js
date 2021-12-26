const lista1=[100,200,300,500];


function CalcularMediaAritmetica(lista){
    //let sumaLista=0;

    //for(let i=0;i<lista.length;i++){
    //    sumaLista=sumaLista+lista[i];
    //}
    const sumaLista=lista.reduce(
        function (valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;    
    return promedioLista;
}

//array.map(): te divide en 2 cada elemento del array.
//array.filter(): te muetra el elemento del medio del array.
//arra.reduce: te muestra la suma de los elementos del array.