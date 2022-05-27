var n1 = prompt('Informe um numero : ')
var n2 = prompt('Informe o segundo numero : ')
var n3 = prompt('Informe o terceiro numero : ')

n1 = parseInt(n1)
n2 = parseInt(n2)
n3 = parseInt(n3)


if((n1 < n2)&&(n1 <n3))
{
    document.write(n2 + n3)
}
else if(n2 < n3)
{
    document.write(n1 + n3)
}
else
{
    document.write(n1 + n2)
}