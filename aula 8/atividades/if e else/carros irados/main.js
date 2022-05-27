var custofab = prompt("Digite o custo de fábrica : ")
var custoconsu  = (distribuidor + valorimposto)
var porcendist = 28
var percentimposto = 45
var distribuidor = (custofab * porcendist) /100
var valorimposto = (custofab* percentimposto) /100

document.write("O custo ao consumidor de um carro novo é : "+custoconsu+'<br><br>')