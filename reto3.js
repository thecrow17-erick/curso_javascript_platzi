function CantDig(dig){
    return (Math.log10((dig ^ (dig >> 31)) - (dig >> 31)) | 0) + 1;
}

function modaGeometrica(lista){
    const n=lista.length;
    let multi=1;
    for(let i=0;i<lista.length;i++){
        let m=CantDig(lista[i]);
        multi=multi*((lista[i]/Math.pow(10,m))+1);
    }
    const moda=Math.pow(multi,1/n);
    return moda;
}