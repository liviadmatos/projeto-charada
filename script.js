
const cardInner = document.getElementById('card-inner');
const campoPergunta = document.getElementById('pergunta');
const campoResposta = document.getElementById('resposta');
const btnNova = document.getElementById('btn-nova');


let acertos = 0;
let erros = 0;
let segundos = 0;
let cronometro;
let listaCharadas = []; 
let totalCharadasNoRound = 0;


function iniciaCronometro() {
    cronometro = setInterval(() => {
        segundos++;
        const min = Math.floor(segundos / 60).toString().padStart(2, '0');
        const seg = (segundos % 60).toString().padStart(2, '0');
        document.getElementById('timer').textContent = `${min}:${seg}`;
    }, 1000);
}


async function carregarJogo() {
    try {
        campoPergunta.textContent = "Preparando baralho...";
        // evitar repetições
        const url = 'https://api-charadas-7fbv.vercel.app/charadas'; 
        const respostaApi = await fetch(url);
        const dados = await respostaApi.json();
        
        // embaralhamento
        listaCharadas = dados.sort(() => Math.random() - 0.5);
        totalCharadasNoRound = listaCharadas.length;
        
        proximaCharada();
        iniciaCronometro();
    } catch (erro) {
        campoPergunta.textContent = "Erro ao carregar o jogo.";
        console.error("Erro na carga inicial", erro);
    }
}


function proximaCharada() {
    
    if (listaCharadas.length === 0) {
        finalizarJogo();
        return;
    }

    resetCard();
    
    
    const charadaAtual = listaCharadas.shift();
    
    campoPergunta.textContent = charadaAtual.pergunta;
    campoResposta.textContent = charadaAtual.resposta;
}


function calcularScoreFinal() {
    const pontosBase = acertos * 100;
    const penalidadeErros = erros * 50;
    // O bônus diminui conforme o tempo (segundos) aumenta
    const bonusVelocidade = Math.floor((acertos * 1000) / (segundos + 1));
    
    // Garante que o score não seja negativo
    return Math.max(0, pontosBase + bonusVelocidade - penalidadeErros);
}

/**
 * Incrementa contadores e avança para a próxima pergunta
 * @param {boolean} foiAcerto 
 */
function marcarPonto(foiAcerto) {
    if (foiAcerto) {
        acertos++;
        document.getElementById('acertos').textContent = acertos;
    } else {
        erros++;
        document.getElementById('erros').textContent = erros;
    }
    
    // Pequeno delay para permitir que o card "desvire" antes de trocar o texto
    setTimeout(proximaCharada, 300);
}

/**
 * Para o tempo, calcula a pontuação e exibe os resultados
 */
function finalizarJogo() {
    clearInterval(cronometro);
    const scoreFinal = calcularScoreFinal();
    const tempoFinal = document.getElementById('timer').textContent;
    const precisao = Math.round((acertos / totalCharadasNoRound) * 100);
    
    alert(`
        🏆 JOGO CONCLUÍDO!
        ----------------------------
        ⭐ PONTUAÇÃO FINAL: ${scoreFinal}
        ----------------------------
        ✅ Acertos: ${acertos}
        ❌ Erros: ${erros}
        ⏱️ Tempo Total: ${tempoFinal}
        📊 Precisão: ${precisao}%
    `);
    
    reiniciarEstado();
}


function reiniciarEstado() {
    acertos = 0;
    erros = 0;
    segundos = 0;
    document.getElementById('acertos').textContent = "0";
    document.getElementById('erros').textContent = "0";
    document.getElementById('timer').textContent = "00:00";
    carregarJogo();
}

function resetCard() {
    cardInner.classList.remove('[transform:rotateY(180deg)]');
}


cardInner.addEventListener('click', () => {
    cardInner.classList.toggle('[transform:rotateY(180deg)]');
});


btnNova.addEventListener('click', proximaCharada);


carregarJogo();
