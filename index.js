let qtdeVitorias = 115
let qtdeDerrotas = 85
let nivel = ""
let pronome = "feminino"

let saldo = calcularRank(qtdeVitorias,qtdeDerrotas)

console.log(saldo)

if(saldo<=10){nivel = "Ferro"}

else if(saldo>10 && saldo<=20){nivel = "Bronze"}

else if(saldo>20 && saldo<=50){nivel = "Prata"}

else if(saldo> 50 && saldo<=80){nivel = "Ouro"}

else if(saldo> 80 && saldo<=90){nivel = "Diamante"}

else if(saldo>90 && saldo<=10){nivel = "Lendário"}

else if(saldo>100){nivel = "Imortal"}



switch(pronome){
    case "masculino":
        console.log("O Herói tem saldo de " + saldo + " e está no nível de " + nivel+"!")
        break;
    case "feminino":
        console.log("A Heroina tem saldo de " + saldo + " e está no nível de " + nivel+"!")
        break;
    case "neutro":
        console.log("Heroine tem saldo de " + saldo + " e está no nível de " + nivel+"!")

}

//Função
function calcularRank(vitorias,derrotas){
    let diferenca = vitorias-derrotas;
    return diferenca
}

