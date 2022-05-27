var distanKM = prompt('digite a distancia :')
var KMlitros = prompt('digite quantos km o seu carro faz por litros : ')

document.write('A distancia foi de '+distanKM+'KM <br>')
document.write('seu carro consome : '+KMlitros+'KM <br>' )

var media = parseInt(distanKM/KMlitros)
document.write('A media de consumo é :'+media+'Km/L')