


function ordenarArray(lista){
    function comparar(a,b){
        return a - b;
    }
    return lista.sort(comparar);
}

function mediana(lista){
    ordenado=ordenarArray(lista);
    mitadOrdenado=parseInt(ordenado.length/2);
    let mediana;
    if(ordenado.length%2===0){
        mediana=(ordenado[mitadOrdenado]+ordenado[mitadOrdenado-1])/2;
    }else{
        mediana=ordenado[mitadOrdenado];
    }
    return mediana;
}