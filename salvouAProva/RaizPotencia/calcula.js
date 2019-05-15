function calcula(potencia) {
    let num = document.getElementById("myText").value;
    if(potencia){
        document.getElementById("resultado").innerHTML = Math.pow(num, 2);
    }
    else{
        document.getElementById("resultado").innerHTML = Math.sqrt(num);
    }
    
}

