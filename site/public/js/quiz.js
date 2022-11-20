
var pontosQ = 0;
var placar = 0
var h1Pergunta = document.getElementById("h1Pergunta");
var pergunta = document.getElementById("pergunta");

var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");


const q1 = {
    pergunta: "Qual o meu álbum de RAP favorito?",
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
const q6 = {
    pergunta: "Em que ano o Hip-Hop foi criado?",
    altA: "1975",
    altB: "1973",
    altC: "1970",
    altD: "1971",
    correta: "1970"
}
const q7 = {
    pergunta: "Qual pessoa fundou o Hip-hop?",
    altA: "DJ Africa Bambaataa",
    altB: "Tupac",
    altC: "Mano Brown",
    altD: "Rakim",
    correta: "DJ Africa Bambaataa"
}
const q8 = {
    pergunta: "Qual pessoa fundou o Hip-hop?",
    altA: "DJ Africa Bambaataa",
    altB: "Tupac",
    altC: "Mano Brown",
    altD: "Rakim",
    correta: "DJ Africa Bambaataa"
}
const q9 = {
    pergunta: "Qual pessoa fundou o Hip-hop?",
    altA: "DJ Africa Bambaataa",
    altB: "Tupac",
    altC: "Mano Brown",
    altD: "Rakim",
    correta: "DJ Africa Bambaataa"
}
const q10 = {
    pergunta: "Qual pessoa fundou o Hip-hop?",
    altA: "DJ Africa Bambaataa",
    altB: "Tupac",
    altC: "Mano Brown",
    altD: "Rakim",
    correta: "DJ Africa Bambaataa"
}


const quest = [q1, q2, q3, q4, q5,q6];

var questaoQuiz = 0
var questoesPassadas = 0
var indice = 0
var vt_indice = []
var i = 0
var index = 0


function rendQuest(numQuest) {
    button = document.getElementById("divBtn")
    button.style.display = "none"
    divQuiz = document.getElementById("contQuiz") 
    divQuiz.style.display = "flex"


    for(i = 0; ; i++) {
        indice = Math.floor(Math.random() * quest.length)
        if(vt_indice.indexOf(indice) == -1) {
            vt_indice.push(indice)
            index = indice
            console.log("index: " + index)
            break
        }else {
            
        }
    }

    
    //console.log("Vetor" + quest[indice])

    console.log("Questão: " + index)
    h1Pergunta.innerHTML = quest[index].pergunta;
    a.innerHTML = quest[index].altA;
    b.innerHTML = quest[index].altB;
    c.innerHTML = quest[index].altC;
    d.innerHTML = quest[index].altD;
    a.setAttribute('value', numQuest + 'A')
    b.setAttribute('value', numQuest + 'B')
    c.setAttribute('value', numQuest + 'C')
    d.setAttribute('value', numQuest + 'D')


}



function acertou(numQuest, resposta) {
    animacao = document.getElementById("contQuiz") 
    animacao.classList.remove("aniQuiz")
    var numeroQuestao = numQuest.value
    console.log("Numero questão: " + numeroQuestao)
    var respEscolhida = resposta.textContent
    console.log("Resp Escolhida"+ respEscolhida)
    var certa = quest[numeroQuestao].correta
    console.log("resposta certa "+ certa)
    var questAtual = document.getElementById("questaoAtual")

    if(respEscolhida == quest[index].correta) {
        console.log('certo')
        animacao.classList.add("certa")
        pontosQ += 10
        questoesPassadas++
        questAtual.innerHTML = `${questoesPassadas}/5`
        console.log(questoesPassadas)
    } else {
        console.log('errado')
        animacao.classList.add("errada")
        questoesPassadas++
        console.log(questoesPassadas)
        questAtual.innerHTML = `${questoesPassadas}/5`
    }
    pontos = document.getElementById("pontos")
    // placar
    pontos.innerHTML = "Pontos: " + pontosQ

    
    setTimeout(() => { 
        
        if(questoesPassadas >= 5) {
            console.log('fim')

            contQuiz.innerHTML = `<p class="fim"> Fim de jogo!! </p>
            <p class="pontosFim"> Você fez ${pontosQ} pontos </p>
            <button onclick="location.reload()" class="btn"> Jogar novamente </button>
            <button onclick="rank()" class="btn"> Ver ranking </button>`
            sessionStorage.PONTOS = pontosQ
            cadastrar()
        }else {
            animacao.classList.remove("certa")
            animacao.classList.remove("errada")
            rendQuest(questoesPassadas)
        }
    }, 1700)
    
    

}

function cadastrar() {

    fetch(`/rotaQuiz/quizCadastrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: sessionStorage.ID_USUARIO,
            pontos: pontosQ
        })
    }).then((response) => {
        console.log("Resp QUIZ: ", response)

    }).catch((error) => {[
        console.log("Erro: " + error)
    ]})
}

function rank() {
    fetch(`/rotaQuiz/verify`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: sessionStorage.ID_USUARIO,
            pontos: pontosQ
        })
    }).then((response) => {
        console.log("Resp VERIFY: ", response)

    }
    ).catch((error) => {[
        console.log("Erro: " + error)
    ]})

}


