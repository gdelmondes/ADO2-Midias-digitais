function contaLetras() {
    let x = document.getElementById("myText").value;
    x = x.toString();
    let i;
    let res;
    let cont = 0;
    for (i = 0; i < x.length; i++) {
        res = x.charAt(i);
        if(res != " ")
            cont += 1;
      }
    document.getElementById("resultado").innerHTML = "Total de letras: " + cont;
  }