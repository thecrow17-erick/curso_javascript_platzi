//const precioOriginal= 120;
//const descuento=0.18;

//const precioconDescuento=precioOriginal-(precioOriginal*descuento);

//console.log({precioOriginal,descuento,precioconDescuento});

function calcularPrecioConDescuento(precio,descuento){
    porcentaje=descuento/100;
    return precio-(precio*porcentaje);
}

function Calcular_Descuento(){
    const precio1=document.getElementById("input_price");
    const price=precio1.value;

    const descuento1=document.getElementById("input_discount");
    const discount=descuento1.value;

    const PrecioTotal=calcularPrecioConDescuento(price,discount);
    const res=document.getElementById("Result");
    res.innerText="El precio del producto: $"+PrecioTotal;
}