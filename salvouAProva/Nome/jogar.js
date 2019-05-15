function contaLetras(texto){
    let i;
    let res;
    let cont = 0;
    for(i = 0; i < texto.length-1; i++){
        res = texto.toCharAt(i);
        if(res != " "){
            cont += 1;
        }
    }
    return cont;
}