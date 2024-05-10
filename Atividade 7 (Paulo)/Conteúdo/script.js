function validaForm(){
    let nome = document.getElementById("nome").value;
    let erro = document.getElementById("erro");

    let email = document.getElementById("email").value;
    let gmail = document.getElementById("gmail");

    let mensagem = document.getElementById("mensagem").value;
    let meensagem = document.getElementById("meensagem");

    if (nome === ""){
        document.getElementById("nome").style.borderColor = "red";
        document.getElementById("erro").innerHTML = "Campo nāo preenchido!";

    }else{
        document.getElementById("nome").style.borderColor = "rgb(93, 225, 93)";
        document.getElementById("erro").innerHTML = "";

    }

    if (email === ""){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("gmail").innerHTML = "Campo nāo preenchido!";

    
    }else{
        document.getElementById("email").style.borderColor = "rgb(93, 225, 93)";
        document.getElementById("gmail").innerHTML = "";
;
    }

    if(mensagem === ""){
        document.getElementById("mensagem").style.borderColor = "red";
        document.getElementById("meensagem").innerHTML = "Campo nāo preenchido";

    }else{
        document.getElementById("mensagem").style.borderColor = "rgb(93, 225, 93)";
        document.getElementById("meensagem").innerHTML = "";
    }

    if(nome != "" && email != "" && mensagem != ""){
        alert ("Mensagem enviada com sucesso!");
    }
}