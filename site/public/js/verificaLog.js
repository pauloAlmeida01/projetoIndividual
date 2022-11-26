function vLogin() {
    var emaill = email.value
    var senhaa = senha.value
    if(emaill.length == 0 || emaill.length == 0) {
        alert("Preencha todos os campos!")
    }else if(emaill.indexOf("@") == -1 || emaill.indexOf(".") == -1) {
        alert("Email inválido!")
    }else if(senhaa.length < 8) {
        alert("A senha deve conter no mínimo 8 caracteres!")
    }else if(emaill.length > 45) {
        alert("O email deve conter no máximo 45 caracteres!")
    }else if(senhaa.length > 20) {
        alert("A senha deve conter no máximo 20 caracteres!")
    }else {
        aguardar();

        var emailVar = email.value;
        var senhaVar = senha.value;

        if (emailVar == "" || senhaVar == "") {
            alert("Mensagem de erro para todos os campos em branco");
            finalizarAguardar();
            return false;
        }
        else {
            setInterval(sumirMensagem, 5000)
        }

        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;

                    setTimeout(function () {
                        window.location = "./dashboard/quiz.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }

    
}