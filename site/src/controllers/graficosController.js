var graficoModel = require('../models/graficoModel.js');

function dados(req,res) {
    graficoModel.slcDados().then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro para recuperar os dados", erro.sqlMessage);
    });

}

function dados2(req,res) {
    graficoModel.slcDados2().then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro para recuperar os dados", erro.sqlMessage);
    });

}

function dados3(req,res) {
    graficoModel.slcDados3().then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro para recuperar os dados", erro.sqlMessage);
    });

}

function dados4(req,res) {
    graficoModel.slcDados4().then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro para recuperar os dados", erro.sqlMessage);
    });

}

function dados5(req,res) {
    graficoModel.slcDados5().then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro para recuperar os dados", erro.sqlMessage);
    });

}

function dados6(req,res) {
    graficoModel.slcDados6().then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro para recuperar os dados", erro.sqlMessage);
    });

}

function dados7(req,res) {
    graficoModel.slcDados7().then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro para recuperar os dados", erro.sqlMessage);
    });

}

module.exports = {
    dados,
    dados2,
    dados3,
    dados4,
    dados5,
    dados6,
    dados7
}