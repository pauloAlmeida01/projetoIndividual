var database = require("../database/config")

function quiz(id,pontos) {
    console.log("NO MODEL")
    var instrucao = `insert into quiz (fkUsuario,dtHora, pontos) values (${id},current_timestamp, ${pontos})`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    
}

function pegarIdQuiz(id,pontos) {
    console.log("NO MODEL")
    var instrucao = `select * from quiz where fkUsuario = ${id} and pontos <= ${pontos} order by pontos DESC limit 2;`;
    console.log("Executando a instrução SQL: PEGAR IDQUIZ \n" + instrucao);
    return database.executar(instrucao);
}

function verificar(id,fkQuiz) {
    console.log("NO MODEL")
    var instrucao = `select * from rankQuiz where fkUsuario = ${id} and pontos <= 50 and fkQuiz = ${fkQuiz}`;
    console.log("Executando a instrução SQL: VERIFICAR \n" + instrucao);
    return database.executar(instrucao);
}

function insertRank(id,idQuiz,pontos) {
    console.log("NO MODEL")
    var instrucao = `insert into rankQuiz (fkUsuario,fkQuiz, pontos) values (${id},${idQuiz}, ${pontos})`;
    console.log("Executando a instrução SQL: INSERT RANK \n" + instrucao);
    return database.executar(instrucao);
}

function upRank (id,idQuiz,idQuizAntigo,pontos) {
    console.log("NO MODEL")
    var instrucao = `update rankQuiz set pontos = ${pontos},fkQuiz = ${idQuiz} where fkUsuario = ${id} and fkQuiz = ${idQuizAntigo} and pontos < ${pontos}`;
    console.log("Executando a instrução SQL: UPDATE RANK \n" + instrucao);
    return database.executar(instrucao);
}

function slcDados() {
    console.log("NO MODEL")
    var instrucao = `select usuario.nome,rankQuiz.pontos from usuario join quiz on usuario.id = fkUsuario 
    join rankQuiz on quiz.id = fkQuiz order by rankQuiz.pontos desc limit 4;`;
    console.log("Executando a instrução SQL: SLCDADOS \n" + instrucao);
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