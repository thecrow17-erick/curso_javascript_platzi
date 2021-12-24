function Calcular_precio(){
    const cup=["Bronce","Plata","Oro","Platino","Diamante"];
    var i;
    const size=cup.length;
    const cupon=document.getElementById("cupones");
    const value_cupon=cupon.value;
    var cupones
    for(i=0;i<size;i++){
        if((value_cupon==cup[i]) && (cup[i]=="Bronce")){
            cupones=0.05;
        }else if((value_cupon==cup[i])&&(cup[i]=="Plata")){
            cupones=0.15;
        }else if((value_cupon==cup[i])&&(cup[i]=="Oro")){
            cupones=0.20;
        }else if((value_cupon==cup[i])&&(cup[i]=="Diamante")){
            cupones=0.30;
        }else if(value_cupon==cup[i]&&(cup[i]=="Platino")){
            cupones=0.50;
        }
    }
    const producto=document.getElementById("producto");
    const value_product=producto.value;

    const PrecioTotal=value_product-(value_product*cupones);

    const result=document.getElementById("result");
    result.innerText="Precio total $"+PrecioTotal;
}