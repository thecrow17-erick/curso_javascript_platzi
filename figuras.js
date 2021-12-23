
function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//aqui interactuamos con html
 //getelement: saca la informacion del elemento html
 // .value: saca el valor en especifico.
function calcular_perimetro_cuadrado(){
    const input=document.getElementById("input_cuadrado");
    const n=input.value;

    const perimetro=perimetroCuadrado(n);
    alert(perimetro);
}
function calcular_area_cuadrado(){
    const input=document.getElementById("input_cuadrado");
    const n=input.value;
    
    const area=areaCuadrado(n);
    alert(area);
}