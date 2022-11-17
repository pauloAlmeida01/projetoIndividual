var database = require("../database/config")

function quiz(id,pontos) {
    console.log("NO MODEL")
    var instrucao = `insert into quiz (fkUsuario, pontos) values (${id}, ${pontos})`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    
}

module.exports = {
    quiz
}