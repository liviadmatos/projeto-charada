🧩 Gerador de Charadas

Um jogo interativo de charadas desenvolvido com HTML, JavaScript e Tailwind CSS, que consome uma API externa para gerar perguntas aleatórias. O jogador pode testar seus conhecimentos, acompanhar o tempo de resposta e visualizar sua pontuação final.

📌 Funcionalidades
Geração automática de charadas a partir de uma API
Sistema de pontuação baseado em:
Acertos
Erros
Tempo de resposta
Cronômetro em tempo real
Cálculo de precisão (% de acertos)
Embaralhamento das charadas
Interface interativa com efeito de cartão (flip card)
Reinício automático ao finalizar o jogo

🖥️ Tecnologias Utilizadas
HTML5
JavaScript (ES6+)
Tailwind CSS
API REST
DOM Manipulation
Async/Await
Fetch API

🎮 Como Funciona o Jogo
O sistema carrega uma lista de charadas de uma API.
As charadas são embaralhadas.
O jogador clica no cartão para ver a resposta.
O jogador marca se acertou ou errou.
O sistema registra:
Acertos
Erros
Tempo
Ao finalizar, o sistema calcula a pontuação final.
🧠 Fórmula da Pontuação

A pontuação é calculada com base em três fatores:

Pontos por acerto
Penalidade por erro
Bônus por velocidade
Regras:
Pontos base = acertos × 100
Penalidade = erros × 50
Bônus velocidade = (acertos × 1000) / tempo
Score final = pontos base + bônus velocidade − penalidade

O score nunca será negativo.

📂 Estrutura do Projeto
projeto-charadas/
│
├── index.html
├── script.js
└── readme.md
🌐 API Utilizada
https://api-charadas-7fbv.vercel.app/charadas

A API retorna uma lista de objetos no formato:

{
  "pergunta": "Pergunta da charada",
  "resposta": "Resposta da charada"
}
▶️ Como Executar o Projeto
Baixe ou clone o repositório
git clone <url-do-repositorio>
Abra o arquivo:
index.html
O jogo iniciará automaticamente no navegador.

Não é necessário instalar dependências.

📊 Métricas Exibidas no Jogo
✅ Acertos
❌ Erros
⏱️ Tempo
⭐ Pontuação final
📊 Precisão (%)

💡 Possíveis Melhorias Futuras
Sistema de ranking (leaderboard)
Níveis de dificuldade
Banco de dados para salvar pontuações
Sons e animações
Modo multiplayer
Tema escuro
Responsividade melhorada


Desenvolvido por Lívia Domigues Matos