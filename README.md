# Minha API de Series
Simples
Prático
escalável
Eficiente
Confiável

# Sobre a API

Olá, este é a criação de uma api simples e fácil para quem está iniciando no mundo BACK-END. 
Te convido a dar uma passada aqui pelo meu README.md que por sinal te ajudará a entender melhor como foi construída.
A linguagem escolhida foi o Node.js

# Node-definição:

É um ambiente de execução do código JavaScript do lado servidor (server side), que na prática se reflete na possibilidade de criar aplicações 


# Para que serve
Está API foi criada com a linguagem Node.js e permitirá ao usuário ter aceso as suas listas de series favoritas e poder inserir novas séries quando necessárias através dos métodos Post e Get,
e posteriomente permitir que seja inserida outras funcionalidade como:

# ATUALIZAR
# DELETAR
# PUT

# Méodos utilizados

GET /series: Retorna todas as SERIES armazenadas na memória.
POST /series: Adiciona uma nova SERIE à lista[].

# Método: GET é um verbo do HTTP pque nos permite que os parametros seja enviados pelo cabeçalho,  através de uma URL como explo abaixo:
    *URL: http://localhost:3333/series - Cabeçalho da requisição
   
# Método: POST no posto os parametros são enviados través do corpo da requisição HTTP, como no exepolo abaixo: 
  
    * URL: http://localhost:3333/series - Corpo da requisição

   
# A estrutura JSON 
Aqui vimos como será a estrutura das requisições no método POST pelo JSON

POST
{
  "id": 9,
  "title": "O alfaiate"",
  "description": "Uma serie de drama",
  "status": true
}
   

