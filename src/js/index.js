/* 
OBJETIVO 1 - Quando o usuario clicar no botão de "Veja o Trailer", devemos abrir o modal com o video do trailer.
OBJETIVO 2 - Quando o usuario clicar no "X" devemos fechar o modal

OBJETIVO 1 - Quando o usuario clicar no botão de "Veja o Trailer", devemos abrir o modal com o video do trailer.
- Passo 1: dar um jeito de pegar o elemento que representa o botao na tela usando o js
- Passo 2: dar um jeito de identificar quando o usuario clicar no botão
- Passo 3: dar um jeito de pegar o elemento da modal no JS
- Passo 4: Abrir modal na tela

OBJETIVO 2 - Quando o usuario clicar no "X" devemos fechar o modal
- Passo 1: dar um jeito de pegar o elemento de fechar o elemento de fechar modal usando js
- Passo 2: dar um jeito de identificar o usuario clicar no "X"
- Passo 3 - fechar a modal
*/
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById ("video")
const modal = document.querySelector (".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);        
});
botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

