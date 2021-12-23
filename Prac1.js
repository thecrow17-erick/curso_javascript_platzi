var nombre='erick';
var apellido='aricari'

console.log(nombre+' '+apellido);

var dineroahorrado=300;
var deudas= 100;
var total=dineroahorrado-deudas;
console.log(total);


function myfuction(name, lastname,nickname){
    var nombre_full=name+' '+lastname;
    return 'minomrbre es '+nombre_full+' pero prefiero que me digan '+nickname+'.';
}

console.log(myfuction('erick','aricari','crow'));


const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion=="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion=="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 
if(tipoDeSuscripcion=="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(tipoDeSuscripcion=="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


const tipoDeSuscripcion = "Basic";
const suscription=["Free","Basic","Expert","ExpertPlus"];
if (tipoDeSuscripcion==suscription[]){
}

let i=5;
while (i>=2){
    i--;
    console.log("El valor de i es: " + i);
}

var preg=0;
while (preg!=4){
    var preg=prompt("cuanto es 2+2");
    if(preg!=4){
    console.log("intente de nuevo");
    }else{
        console.log("estas en los correcto");
    }
}
for(){}