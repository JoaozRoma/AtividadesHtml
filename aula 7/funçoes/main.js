function nome_funçao()
{
    alert('Login ou senha incorreto')
}
function somar(a,b)
{
    var total = a + b
    alert('o valor da soma de 8 + 3 é :'+ total)
}

function desconto(a,b)
{
    var totalDesc = a - b
    alert('o valor do desconto  é :'+ totalDesc)
    return totalDesc
}

var resulTotalDesc = desconto(7,5)
{
document.write('valor final com descontos : ' + resulTotalDesc)
}