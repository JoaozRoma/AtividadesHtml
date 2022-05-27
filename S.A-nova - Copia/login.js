function myFunction()
{
    var user = document.forms["myForm"] ["User"].value;
    var senha = document.forms["myForm"] ["Senha"].value;

    if(user =="admin" && senha == "182")
    {
        window.location.href="index.html";
    }
    else{
        alert("Senha de Usuário inválida.")
    }
}