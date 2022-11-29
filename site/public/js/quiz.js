
var pontosQ = 0;
var placar = 0
var h1Pergunta = document.getElementById("h1Pergunta");
var pergunta = document.getElementById("pergunta");

var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");


const q1 = {
    pergunta: "Em qual cidade americana o Hip hop surgiu?",
    altA: "Nova Iorque",
    altB: "Chicago",
    altC: "Miami",
    altD: "Los Angeles",
    correta: "Nova Iorque"
}

const q2 = {
    pergunta: "Quais são os 4 pilares do Hip hop?",
    altA: "Rap, Girias, Breakdance",
    altB: "Rap, DJing, Breakdance, Grafite",
    altC: "Rap, DJing, Breakdance,Moda",
    altD: "Rap e Breakdance",
    correta: "Rap, DJing, Breakdance, Grafite"
}

const q3 = {
    pergunta: "O que é o Hip Hop?",
    altA: "Musica popular",
    altB: "Dança e musica",
    altC: "Arte urbana",
    altD: "Movimento Cultural",
    correta: "Movimento Cultural"
}
const q4 = {
    pergunta: "Onde acontecia os eventos de Hip Hop em São Paulo?",
    altA: "Rua 24 de maio",	
    altB: "Praça da Sé",
    altC: "Rua 24 de maio e Metrô São Bento",
    altD: "Estação da Luz",
    correta: "Rua 24 de maio e Metrô São Bento"
}
const q5 = {
    pergunta: "Quem fundou o Hip-hop?",
    altA: "DJ Afrika Bambaataa",
    altB: "Tupac",
    altC: "DJ Kool Herc",
    altD: "Rakim",
    correta: "DJ Kool Herc"
}
const q6 = {
    pergunta: "Em que ano o Hip-Hop foi criado?",
    altA: "1975",
    altB: "1973",
    altC: "1970",
    altD: "1971",
    correta: "1973"
}
const q7 = {
    pergunta: "Quem deu origem a ONG Zulu Nation?",
    altA: "DJ Africa Bambaataa",
    altB: "Dj Kool Herc",
    altC: "Grandmaster Flash",
    altD: "NWA",
    correta: "DJ Africa Bambaataa"
}
const q8 = {
    pergunta: "Qual cidade é o berço do Hip Hop no Brasil?",
    altA: "Rio de Janeiro",
    altB: "Minas Gerais",
    altC: "Bahia",
    altD: "São Paulo",
    correta: "São Paulo"
}



const quest = [q1, q2, q3, q4, q5,q6,q7,q8];

var questaoQuiz = 0
var questoesPassadas = 0
var indice = 0
var vt_indice = []
var i = 0
var index = 0


function rendQuest(numQuest) {
    desbloquear()
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

function bloquear() {
    var ol = document.getElementById('olQuiz')
    ol.style.pointerEvents = 'none'
}

function desbloquear() {
    var ol = document.getElementById('olQuiz')
    ol.style.pointerEvents = 'auto'
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
        bloquear()
    } else {
        console.log('errado')
        animacao.classList.add("errada")
        questoesPassadas++
        console.log(questoesPassadas)
        questAtual.innerHTML = `${questoesPassadas}/5`
        bloquear()
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
            <button onclick="rendRank()" class="btn"> Ver ranking </button>`
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
    
    setTimeout(()=> {
        rank()
    },400)
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
var vtdados= []

function rendRank() {

    var divQuiz = document.getElementById("contQuiz")
    divQuiz.style.display = "flex"
    

    fetch(`/rotaQuiz/dados`).then(response => {
        console.log("Resp DADOS: ", response)

        if(response.ok) {
            response.json().then((data) => {
                console.log("Data: ", data)
                    console.log("Data: ", data[0])

                    for(i = 0; i < data.length; i++) {
                        vtdados.push(data[i])
                    }
                    divQuiz.innerHTML = ""
                    divQuiz.innerHTML = `<h1 class="h1Rank"> Ranking </h1><br>`
                    for(i = 0; i < vtdados.length; i++) {
                        
                        divQuiz.innerHTML += `<p class="pontosFim2">${i+1} -  ${vtdados[i].nome} - ${vtdados[i].pontos} </p>`
                        
                    }
                    divQuiz.innerHTML += `<button onclick="location.reload()" class="btn"> Jogar novamente </button>`
                }
            )

            }   

    
            }).catch(function (error) {
        console.log("Erro: " + error)
    });
    

}




