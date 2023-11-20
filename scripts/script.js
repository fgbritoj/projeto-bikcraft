// Header - Marcar página selecionada 
const links = document.querySelectorAll('.header-menu a')

links.forEach(link => {
    if(location.href.includes(link.href)) {
        link.classList.add('ativo')
    }
})


// Seguros - Perguntas (mostrar respostas ao clique)
const perguntas = document.querySelectorAll('.pergunta-item')

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        pergunta.nextElementSibling.classList.toggle('mostrar')

        const seta = pergunta.querySelector('img')
        seta.classList.toggle('rotacionar')
    })
});


// Orçamento - Marcar Input de acordo com produto escolhido
const produtoEscoliho = new URLSearchParams(location.search)

produtoEscoliho.forEach(produto => {
    const elemento = document.getElementById(produto)

    if(elemento) {
        elemento.checked = true
    }
})

// Bicicletas - Galeria de Bicicletas
const galeria = document.querySelector('.bicicleta-imagens')
const imagens = document.querySelectorAll('.bicicleta-imagens img')

imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {

        if(matchMedia('(min-width: 1000px)').matches) {
            galeria.prepend(imagem)
        }
    })
})