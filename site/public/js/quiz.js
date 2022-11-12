
var pontosQ = 0;
var placar = 0
var h1Pergunta = document.getElementById("h1Pergunta");
var pergunta = document.getElementById("pergunta");

var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");


const q1 = {
    pergunta: "Qual o meu album de RAP favorito?",
    altA: "Ready to Die",
    altB: "Astroworld",
    altC: "Rap é Compromisso",
    altD: "To Pimp a Butterfly",
    correta: "Rap é Compromisso"
}

const q2 = {
    pergunta: "Qual o pilar do Hip-hop que eu mais gosto?",
    altA: "Breakdance",
    altB: "Rap",
    altC: "DJing",
    altD: "Grafite",
    correta: "Rap"
}

const q3 = {
    pergunta: "Qual o meu artista de Rap favorito?",
    altA: "Tupac",
    altB: "Notorious BIG",
    altC: "Criolo",
    altD: "Sabotage",
    correta: "Sabotage"
}
const q4 = {
    pergunta: "Qual a minha música favorita?",
    altA: "Rap é Compromisso",	
    altB: "Favela vive 1",
    altC: "Favela vive 2",
    altD: "Juicy",
    correta: "Juicy"
}
const q5 = {
    pergunta: "Qual pessoa fundou o Hip-hop?",
    altA: "DJ Africa Bambaataa",
    altB: "Tupac",
    altC: "Mano Brown",
    altD: "Rakim",
    correta: "DJ Africa Bambaataa"
}

const quest = [q1, q2, q3, q4, q5];

var questaoQuiz = 0
var questoesPassadas = 0
var indice = 0
var vt_indice = []

function rendQuest(numQuest) {
    indice =  Math.floor(Math.random() * quest.length);
    while(vt_indice.includes(indice)) {
        indice =  Math.floor(Math.random() * quest.length);
    }   

    
    console.log("Indice: " +indice)
    //console.log("Vetor" + quest[indice])


    h1Pergunta.innerHTML = quest[indice].pergunta;
    a.innerHTML = quest[indice].altA;
    b.innerHTML = quest[indice].altB;
    c.innerHTML = quest[indice].altC;
    d.innerHTML = quest[indice].altD;
    a.setAttribute('value', numQuest + 'A')
    b.setAttribute('value', numQuest + 'B')
    c.setAttribute('value', numQuest + 'C')
    d.setAttribute('value', numQuest + 'D')


}

function bloquear() {
    
}

function acertou(numQuest, resposta) {
    var numeroQuestao = numQuest.value
    console.log("Numero questão: " + numeroQuestao)
    var respEscolhida = resposta.textContent
    console.log("Resp Escolhida"+ respEscolhida)

    var certa = quest[numeroQuestao].correta
    console.log("resposta certa "+ certa)
    if(respEscolhida == quest[indice].correta) {
        console.log('certo')
        alert("Correta")
        pontosQ += 10
        questoesPassadas++
        console.log(questoesPassadas)
    } else {
        console.log('errado')
        alert("Errada")
        questoesPassadas++
        console.log(questoesPassadas)
    }
    pontos = document.getElementById("pontos")
    // placar
    pontos.innerHTML = "Pontos: " + pontosQ


    setTimeout(function() {

        if(questoesPassadas >= 5) {
            console.log('fim')
            
        }else {
            rendQuest(questoesPassadas)
        }
    },250)
}