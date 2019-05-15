function J1(joga1) {
    var dado1 = document.getElementById("Die1");
    var jogador1 = document.getElementById("Jogador1");
    var jogador2 = document.getElementById("Jogador2");
    var Aguarde = document.getElementById("Aguarde");

    switch(joga1){
        case 1:
        dado1.src = "sort/1.png";
        break;

        case 2:
        dado1.src = "sort/2.png";
        break;

        case 3:
        dado1.src = "sort/3.png";
        break;

        case 4:
        dado1.src = "sort/4.png";
        break;

        case 5:
        dado1.src = "sort/5.png";
        break;

        case 6:
        dado1.src = "sort/6.png";
        break;

    }
    jogador1.innerHTML="";
    jogador2.innerHTML="Jogador 2";
    Aguarde.innerHTML="";
}

function J2(joga2, J1, J2) {
    var dado2 = document.getElementById("Die2");
    var resultado= document.getElementById("resultado");
    var jogador2 = document.getElementById("Jogador2");

    switch(joga2){
        case 1:
        dado2.src = "sort/1.png";
    
        break;

        case 2:
        dado2.src = "sort/2.png";
        break;

        case 3:
        dado2.src = "sort/3.png";
        break;

        case 4:
        dado2.src = "sort/4.png";
        break;

        case 5:
        dado2.src = "sort/5.png";
        break;

        case 6:
        dado2.src = "sort/6.png";
        break;

    }
    if(R > X){
        resultado.innerHTML=("Jogador 1 Ganhou!!!!");
    }else if(R == X){
        resultado.innerHTML=("Empatou!!!!");
    } else{
        resultado.innerHTML=("Jogador 2 Ganhou!!!!");
    }
    jogador2.innerHTML="";
}