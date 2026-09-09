let pontos = 0;
let multiplicador = 1;

const txtPontos = document.getElementById("pontos");
const txtMultiplicador = document.getElementById("multiplicador");
const butao = document.getElementById("butao");
const mensagem = document.getElementById("mensagem");

butao.onclick = function() {

    pontos += multiplicador

    if (pontos >= 100) {
        multiplicador = 2 ** Math.floor(pontos / 100);
    }

    txtPontos.innerText = pontos;
    txtMultiplicador.innerText = multiplicador;
    }