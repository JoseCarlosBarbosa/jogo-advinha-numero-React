Descrição:
Este projeto consiste em um jogo simples de adivinhação de números, onde o jogador escolhe um número entre 0 e 300, e a máquina tenta adivinhar esse número através de palpites. O objetivo do jogador é indicar se o palpite da máquina está correto, maior ou menor, até que a máquina acerte o número escolhido.

Tecnologias Utilizadas:

React: A biblioteca React foi utilizada para a construção da interface do usuário, permitindo uma experiência interativa e reativa.
Funcionalidades:

Estado do Jogo:

ENTRADA: O estado inicial, onde o jogador é convidado a começar o jogo.
RODANDO: O estado durante o jogo, quando a máquina está fazendo palpites.
FIM: O estado final, exibido quando a máquina acerta o número.
Variáveis de Estado:

estado: Armazena o estado atual do jogo.
palpite: Representa o palpite atual da máquina.
numPalpites: Contador do número de palpites dados pela máquina.
min e max: Representam o intervalo em que a máquina faz seus palpites.
Funções Principais:

iniciarJogo(): Inicia o jogo, definindo o estado como 'RODANDO' e resetando as variáveis necessárias.
menor(): Indica que o número escolhido pelo jogador é menor que o palpite atual da máquina.
maior(): Indica que o número escolhido pelo jogador é maior que o palpite atual da máquina.
acerto(): Indica que o palpite da máquina é o número escolhido pelo jogador, encerrando o jogo.
Renderização da Interface:

Botões e mensagens são renderizados conforme o estado do jogo.
Quando o jogo termina, é exibida uma mensagem com o número correto e a quantidade de palpites.
Instruções para Execução:

Clone o repositório.
Certifique-se de ter o Node.js e o npm instalados.
Navegue até o diretório do projeto e execute npm install para instalar as dependências.
Execute npm start para iniciar o aplicativo em um servidor local.
Conclusão:
Este jogo de adivinhação simples oferece uma experiência interativa usando React e demonstra conceitos básicos de lógica de programação, estados e manipulação de eventos. Pode ser expandido com recursos adicionais, como estilização, histórico de palpites, ou dificuldade ajustável. Este projeto é uma introdução divertida ao desenvolvimento web com React
