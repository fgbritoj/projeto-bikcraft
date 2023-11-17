const perguntas = document.querySelectorAll('.pergunta-item')

console.log(perguntas)

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', clicou => {
        pergunta.nextElementSibling.classList.toggle('mostrar')    
        // pergunta.styleSheets[0].insertRule('.rotate::after { transform: rotate(180deg); }', 1);
    })
});
