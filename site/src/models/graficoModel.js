var database = require("../database/config")

function slcDados() {
    var instrucao = `select count(id) as Count from usuario;`

    return database.executar(instrucao)
}

function slcDados2() {
    var instrucao = `select count(id) as Count from quiz;`

    return database.executar(instrucao)
}

function slcDados3() {
    var instrucao = `select count(id) as Count from rankQuiz where pontos = 50 group by pontos order by pontos DESC ;`

    return database.executar(instrucao)
}

function slcDados4() {
    var instrucao = `select count(id) as Count from rankQuiz where pontos = 40 group by pontos order by pontos DESC ;`

    return database.executar(instrucao)
}

function slcDados5() {
    var instrucao = `select count(id) as Count from rankQuiz where pontos = 30 group by pontos order by pontos DESC ;`

    return database.executar(instrucao)
}

function slcDados6() {
    var instrucao = `select count(id) as Count from rankQuiz where pontos = 20 group by pontos order by pontos DESC ;`

    return database.executar(instrucao)
}

function slcDados7() {
    var instrucao = `select count(id) as Count from rankQuiz where pontos = 10 group by pontos order by pontos DESC ;`

    return database.executar(instrucao)
}



module.exports = {
    slcDados,
    slcDados2,
    slcDados3,
    slcDados4,
    slcDados5,
    slcDados6,
    slcDados7
}