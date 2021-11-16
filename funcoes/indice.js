// é tudo que vai ser executado,seja por conjuntos ou informações
// só vai ser executada quando solicitada
// usamos para agrupar funções lógicas

function compararnumero (x,y){
if (x>y){
    return `o maior numero entre ${x} e ${y} e ${x}`
}else if (x<y){
    return `o maior numero entre ${y} e ${x} é ${y}`
}else {
    return `os numeros são iguais`
}
}
console.log(compararnumero(17,17))
 // esta inserindo valores nesta funcao para fazer uma comparacao

 