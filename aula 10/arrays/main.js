var cores =['amarelo', 'azul','vermelho', 'preto','verde']

document.write('Quantidade de cores cadastradas ' + cores.length)

console.log('Quantidade de cores cadastradas ' + cores.length)

console.log('qual a cor foi cadastrada na 2 ? ' + cores[2])

console.log('qual é a  ultima posiçao do meu array '  + cores[cores.length -1])

cores.forEach(function(item,indice,array)
{
    console.log(item, indice)
}
)

cores.push('laranja')

cores.splice(2,2)