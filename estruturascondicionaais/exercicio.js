//De acordo com as pontuações, utilize a estrutura condicional para retornar se é A, B, C, ou D.Por exemplo: se a pontuação 
//for 85, retornar "B"Se abaixo as regras para cada condição:Se a pontuação for maior que 90, retornar: "A"Se a pontuação for
// maior que 80, retornar: "B"Se a pontuação for maior que 70, retornar: "C"Se a pontuação for maior que 65, retornar: "D"ou "F" *

let ponto = 60

if (ponto >= 85){
    console.log ("a")
}else if (ponto == 60){
    console.log("b")
}else if ( ponto <= 70){
    console.log ("c")
}else if ( ponto >= 90){
    console.log ("d")
}

//Na Agência Turismo é Viver, existem alguns planosde viagens de acordo com a idade da pessoa.A tabela é:PLANO TEEN: A 
//partir de 12 anos até 17 anos.PLANO PROFISSIONAL: A partir de 18 anos até 29 anos.PLANO EXPERIENTE: A partir de 30 anos.Se não 
//inserirem um valor de acordo com as idades,é para retornar: Entrar em contato com a agência de turismo.Aqui você pode 
//utilizar:If/ else if / elseA saída deverá ser algo parecido com:SAÍDA: Você pode verificar os nossos pacotes TEEN. *

let idade = 11

if (idade >= 12){
    console.log ("plano teen")
}else if ( idade >= 18){
    console.log ("plano profissional")
}else if ( idade >= 30){
    console.log ("plano experiente")
}else if ( idade <= 11){
    console.log ("por favor,entre em contato com com a agencia de turismo")
}

// meu exercicio 

let semaforo = 2

if ( semaforo == 1 ){
    console.log ("pode prosseguir")
}else if ( semaforo == 2){
    console.log ("ooopa..espere mais um instante")
}else if (semaforo == 3){
    console.log ("pare,espere a sua vez")
}
