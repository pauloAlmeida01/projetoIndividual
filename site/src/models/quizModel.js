var database = require("../database/config")

function quiz(id,pontos) {
    console.log("NO MODEL")
    var instrucao = `insert into quiz (fkUsuario,dtHora, pontos) values (${id},current_timestamp, ${pontos})`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    
}

function pegarIdQuiz(id,pontos) {
    console.log("NO MODEL")
    var instrucao = `select * from quiz where fkUsuario = ${id} and pontos >= ${pontos} order by pontos DESC limit 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar(id,pontos) {
    console.log("NO MODEL")
    var instrucao = `select * from rankQuiz where fkUsuario = ${id} and pontos <= 50`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function insertRank(id,idQuiz,pontos) {
    console.log("NO MODEL")
    var instrucao = `insert into rankQuiz (fkUsuario,fkQuiz, pontos) values (${id},${idQuiz}, ${pontos})`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function upRank (id,idQuiz,pontos) {
    console.log("NO MODEL")
    var instrucao = `update rankQuiz set pontos = ${pontos} where fkUsuario = ${id} and fkQuiz = ${idQuiz} and pontos < ${pontos}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function slcDados() {
    console.log("NO MODEL")
    var instrucao = `select * from quiz join rankQuiz on quiz.id = rankQuiz.fkQuiz order by rankQuiz.pontos DESC limit 4;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    quiz,
    verificar,
    insertRank,
    upRank,
    pegarIdQuiz,
    slcDados
}