// Header - Marcar página selecionada 
const links = document.querySelectorAll('.header-menu a')

links.forEach(link => {
    if(location.href.includes(link.href)) {
        link.classList.add('ativo')
    }
})

// Seguros - Perguntas (Função para mostrar Respostas ao clique)
const perguntas = document.querySelectorAll('.pergunta-item')

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        pergunta.nextElementSibling.classList.toggle('mostrar')

        const seta = pergunta.querySelector('img')
        seta.classList.toggle('rotacionar')
    })
});
