/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Auto Motors
Aluno 1: Breno Garcia da Silva - RA: 240515
Aluno 2: Eduardo Henrique da Silva - RA: 251880
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/


// Botão voltar ao topo
const btnTopo = document.querySelector('#btnTopo');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnTopo.classList.add('mostrar');
    } else {
        btnTopo.classList.remove('mostrar');
    }
});

btnTopo.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Validação simples do formulário
const formulario = document.querySelector('#formContato');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.querySelector('#nome').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensagem = document.querySelector('#mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha os campos obrigatórios.');
        } else {
            alert('Mensagem enviada com sucesso!');
            formulario.reset();
        }
    });
}

// Efeito nos cards da galeria
const cards = document.querySelectorAll('.card-carro');

cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        card.classList.add('card-destaque-js');
    });

    card.addEventListener('mouseleave', function() {
        card.classList.remove('card-destaque-js');
    });
});

// Filtro simples dos cards
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const itens = document.querySelectorAll('.item-card');

botoesFiltro.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const filtro = botao.getAttribute('data-filtro');

        botoesFiltro.forEach(function(b) {
            b.classList.remove('ativo');
        });

        botao.classList.add('ativo');

        itens.forEach(function(item) {
            const categoria = item.getAttribute('data-categoria');

            if (filtro === 'todos' || categoria === filtro) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
