var quizModel = require('../models/quizModel.js');

function quiz(req, res) { 
    var pontos = req.body.pontos;
    var idUsuario = req.body.idUsuario;

    quizModel.quiz(idUsuario,pontos)
    .then(
        function(resultado) {      
            res.json(resultado);
            
    }
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);

        res.status(500).json(erro.sqlMessage);
    });

}
var idQuiz = 0
function verify(req, res) { 
    var pontos = req.body.pontos;
    var idUsuario = req.body.idUsuario;

    quizModel.pegarIdQuiz(idUsuario,pontos)
    .then(
        function(resultado) {
            console.log("RESULTADO PEGARID ",resultado)
            idQuiz = resultado[0].id;
            console.log("IDQUIZ ", idQuiz)
        } 
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
    });

    quizModel.verificar(idUsuario,pontos)
    .then(
        function(resultado2) {
            res.json(resultado2);
            console.log("Resultado do verificar ",resultado2)
            console.log("TAMANHO",resultado2.length)
            if(resultado2.length > 0){
                console.log("UPDATE")
                quizModel.upRank(idUsuario,idQuiz,pontos)
                .then(
                    function(resultado3) {
                        console.log("RESULTADO UPDATE ",resultado3)
                        res.json(resultado3);
                }
                ).catch(function(erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o update! Erro: ", erro.sqlMessage);
                });
            }
            else{
                console.log("INSERT")
                if(resultado2.length <= 0) {
                quizModel.insertRank(idUsuario,idQuiz,pontos)
                .then(
                    function(resultado4) {
                        console.log("RESULTADO INSERT ",resultado4)
                        res.json(resultado4);
                }
                ).catch(function(erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o insert! Erro: ", erro.sqlMessage);
                });
            }else {
                console.log("Não insere")
            }
            


    }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
    }
    );

        


    

}

function dados(req, res) {
    var pontos = req.body.pontos;
    var idUsuario = req.body.idUsuario;

    quizModel.slcDados(idUsuario,pontos)
    .then(
        function(resultado) {
            res.json(resultado);
    }
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro para recuperar os dados", erro.sqlMessage);
    });

}

module.exports = {
    quiz,
    verify,
    dados
}