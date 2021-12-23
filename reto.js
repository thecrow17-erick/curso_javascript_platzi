function calcularAltura(){
    const lado=document.getElementById("lado");
    const n=lado.value;

    const base=document.getElementById("base");
    const m=base.value;

    const altura=Math.sqrt((n**2)-((m**2)/4));
    alert("La altura del triangulo isosceles mide: "+altura);
}