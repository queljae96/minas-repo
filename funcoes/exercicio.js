//De acordo com as pontuações, crie uma funcao para retornar se é A, B, C, ou D.Por exemplo: se a pontuação 
//for 85, retornar "B"Se abaixo as regras para cada condição:Se a pontuação for maior que 90, retornar: "A"Se a pontuação for
// maior que 80, retornar: "B"Se a pontuação for maior que 70, retornar: "C"Se a pontuação for maior que 65, retornar: "D"ou "F" *

function dados(resposta){

    if (resposta == 90) {
        return "a"
    }else if ( resposta > 90){
        return "b" 
    }else if ( resposta > 80){
        return "c"
    } else if (resposta > 70){
        return "d"
    } else (resposta < 10)
        return "e"
    }


console.log ( dados(71))


semaforo = "verde";

    if (semaforo = "amarelo"){
        console.log ("logo logo pode seguir");
    }else if ( semaforo = "verde" ){
        console.log ("pode prosseguir");
    }else {
        console.log ("aguardea sua vez");
    }
