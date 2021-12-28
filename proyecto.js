function porcentaje(money){
    if (money<5000){
        return 0.10;
    }else if(money>=10000){
        return 0.20;
    }else if(money>=7000){
        return 0.18;
    }else if(money>=5000){
        return 0.12;
    }
}

function anhos_deuda(anhos_year){
    if(anhos_year==="Years 2"){
        return 2;
    }else if(anhos_year==="Years 3"){
        return 3;
    }else if(anhos_year==="Years 4"){
        return 4;
    }else if(anhos_year==="Years 5"){
        return 5;
    }else{
        alert("Seleccione un anho");
    }
}

function interesxd(numero){
    if(numero<5000){
        return "interes del 10%";
    }else if(numero>=10000){
        return "interes del 20%";
    }else if(numero>=7000){
        return "interes del 18%";
    }else if(numero>=5000){  
        return "interes del 12%";
    }
}
function calcular(){
    const monto=document.getElementById("money");
    const monto_value=monto.value;

    const anho=document.getElementById("anho");
    const anho_value=anho.value;

    const interes=porcentaje(monto_value);
    
    const totalDeuda=parseInt(monto_value)+(parseInt(monto_value)*interes);
    const anhos_num=anhos_deuda(anho_value);
    const anhoPagar=totalDeuda/anhos_num;
    const mesesPagar=anhoPagar/12;
    const totalmes=mesesPagar.toFixed(2);
    const inte=interesxd(monto_value);

    if (anho_value!=="to_select"){
        const result1=document.getElementById("result1");
        result1.innerText="An amount of: "+(monto_value)+"$"+" ,with an interest of "+(inte)+".";

        const result2=document.getElementById("result2");
        result2.innerText="An amount of: "+(totalmes)+"$"+", for "+(anhos_num)+" years.";
    }
}