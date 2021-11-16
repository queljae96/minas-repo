// usado para tomar uma decisao durante um processo de leitura daquele algoritmo

let idade = 17

// if em ingles é (se)
// o if só sera executado se a condição for verdadeira
if (idade >= 18 ){
    console.log("vece pode acessar o sistema")
}else{
    console.log("ops...voce nao tem idade o suficiente para acessar o portal")
}

if (true){
    //executar o bloco
}

if (true){
    //executar o bloco se for falsa a condicao
}

// escreva uma função chamada compararnumero que receberá dois parametros,
//em seguida retorne o que for maior.o retorno deverá conter essa mensagem
// "o maior número entre 5 e 10 é 10"
//passo a passo da função:
// criar uma função compararvalor (parametro1,parametro2) inserir uma
// condição for verdadeira,retornar "o mair numero entre 5 e 10 é 10"
// se for falsa,retornar que o segundo parametro é maior que o primeiro

function nome_funcao(){
    //bloco a ser executado
}

// chamar a funcao
nome_funcao()

function obternome(nome){
    return `seu nome é ${ nome}`
}
console.log(obternome("raquel"))

///
function nomedapessoa(nome){
    return `voce se chama ${nome}`
}
console.log(nomedapessoa("rafael"))
