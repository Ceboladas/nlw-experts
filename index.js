const perguntas = [
    {
      pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um novo elemento ao final de um array?",
      respostas: [
        "push()",
        "concat()",
        "splice()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir mensagens no console do navegador?",
      respostas: [
        "console.print()",
        "console.log()",
        "console.display()"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento HTML pelo nome da classe",
        "Seleciona um elemento HTML pelo ID",
        "Seleciona um elemento HTML pelo nome da tag"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para comparar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "unshift()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual das seguintes declarações de função está correta?",
      respostas: [
        "function myFunction() {}",
        "myFunction = function() {}",
        "let myFunction = () => {}"
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara um loop 'for' em JavaScript?",
      respostas: [
        "for (let i = 0; i < 5; i++) {}",
        "for (i = 0; i < 5; i++) {}",
        "for (i = 0; i <= 5; i++) {}"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para converter uma string em um array em JavaScript?",
      respostas: [
        "split()",
        "join()",
        "concat()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof [])?",
      respostas: [
        "object",
        "array",
        "string"
      ],
      correta: 0
    }
  ];
  
  alert(perguntas[0].respostas[perguntas[0].correta]);
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set ()
  
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta 
  
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
   if(estaCorreta) {
     corretas.add(item)
   }
    alert(corretas.size)
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)  
  } 