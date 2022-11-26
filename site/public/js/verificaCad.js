
function vCadastro() {
    var nomee = nome.value
    var emaill = email.value
    var senhaa = senha.value
    var cSenhaa = cSenha.value
    if(nomee.length == 0 || emaill.length == 0 || senhaa.length == 0 || cSenhaa.length == 0) {
        alert("Preencha todos os campos!")
    }
    else if(senhaa != cSenhaa) {
        alert("As senhas não coincidem!")
    }
    else if(senhaa.length < 8) {
        alert("A senha deve conter no mínimo 8 caracteres!")
    }
    else if(emaill.indexOf("@") == -1 || emaill.indexOf(".") == -1) {
        alert("Email inválido!")
    }
    else if(nomee.length < 3) {
        alert("O nome deve conter no mínimo 3 caracteres!")
    }else if(nomee.length > 45) {
        alert("O nome deve conter no máximo 45 caracteres!")
    }else if(emaill.length > 45) {
        alert("O email deve conter no máximo 45 caracteres!")
    }else if(senhaa.length > 20) {
        alert("A senha deve conter no máximo 20 caracteres!")
    }else if(cSenhaa.length > 20) {
        alert("A confirmação de senha deve conter no máximo 20 caracteres!")
    }else {
        var nomeVar = nome.value;
        var emailVar = email.value;
        var senhaVar = senha.value;
        var confirmacaoSenhaVar = cSenha.value;

        if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
            //cardErro.style.display = "block"
           alert("Mensagem de erro para todos os campos em branco");

            //finalizarAguardar();
            return false;
        }
        else {
            //setInterval(sumirMensagem, 5000)
        }

        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {

            console.log("AAAAAAAAAAresposta: ", resposta);

            if (resposta.ok) {
                //cardErro.style.display = "block";

                alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...")

                setTimeout(() => {
                    window.location = "login.html";
                }, 1000)
                
                //limparFormulario();
                //finalizarAguardar();
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            //finalizarAguardar();
        });

        return false;
    }
}   