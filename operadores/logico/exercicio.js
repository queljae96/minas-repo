// dadas dias idades 1 = 18 e 2= 24,compare qual a idade maior e utilize os operadores
//logicos para entender suas comparacoes

//com o operador and : o resultado tem que ser true
//com o operador or ; o resultado tem que ser false
//com o operador logico not o resultado tem que ser true

let idade1 = 18
let idade2 = 24

let and = idade1 <= idade2 && idade2>=idade1
console.log (and)

let or = idade1 >= idade2 || idade1 == idade2
console.log (or)

let not = !idade1 <= idade2
console.log (not)