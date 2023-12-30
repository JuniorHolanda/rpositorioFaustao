function tocar (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaBotoes = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaBotoes.length; contador++) {
    
    const palavra = listaBotoes[contador].classList[1];

    listaBotoes[contador].onclick = function () {
        tocar(`#${palavra}`)
    }

    console.log(palavra)
    console.log(contador)


}