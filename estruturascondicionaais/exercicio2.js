const time1 = "flamengo"
const time2 = "palmeiras"

const numdegols1 = 56
const numdegols2 = 20

if (numdegols1 > numdegols2){
    console.log("o vencedor é" ,time1)
}else if ( numdegols2 < numdegols1){
    console.log ("o vencedor é", time2)
}else{ 
    console.log ("houve um empate")
}

// se for acima de uma duzia a quantidade de maás -- 0,25
// se for abaixo de uma duzia a quantidade de maás -- 0,30

const numdemacas = 10
const duzia = 12

if ( numdemacas >= duzia){
    const total = numdemacas * 0.25
    console.log ("o total da sua compra foi de R$ " ,total)
} else if ( numdemacas <= duzia){
    const total = numdemacas * 0.30
    console.log ("o total da sua compra é de R$ ",total)
}

//