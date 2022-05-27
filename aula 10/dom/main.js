document.getElementById('exemplo1').innerHTML = "inserir texto no getElementById"

function exemplo2()
{
    var nomeElemento = document.getElementsByName('curso')
    console.log(nomeElemento)
}

function exemplo3()
{
    var nomeTag = document.getElementsByTagName('span')
    console.log(nomeTag)
}
function exemplo4()
{
    var nomeclass = document.getElementsByClassName('animal')
    console.log(nomeclass )
}