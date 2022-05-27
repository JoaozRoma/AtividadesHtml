function carConteudo()
{
    document.getElementById('conteudo').innerHTML = "dadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}
function mouseOver()
{
    document.getElementById('mouseAlt').innerHTML='retire o mouse ! '
}
function mouseOut()
{
    document.getElementById('mouseAlt').innerHTML='passe o mouse'
}
function convertText()
{
    var nome = document.getElementById("nome")
    nome.value = nome.value.toUpperCase()
}
function ValidarSenha()
{
    var senha = document.getElementById('senha').value
    if(senha == '' || senha.length <= 5)
    {
        document.getElementById('errosenha').innerHTML = "<spam style ='color : #ff0000;'>Preencha o bagulho certo</spam>"
    }
    else
    {
        document.getElementById('errosenha').innerHTML = "<spam style ='color : #00ff00;'>senha valida</spam>"
    }
}
