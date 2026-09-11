let pontos = 0;
let multiplicador = 1;
let tempo = 35;
let timer;

const txtPontos = document.getElementById("pontos");
const txtMultiplicador = document.getElementById("multiplicador");
const txtTempo = document.getElementById("tempo")
const butao = document.getElementById("butao");
const mensagem = document.getElementById("aviso");
const video = document.getElementById("vd")

butao.onclick = function() {
    if (tempo === 0){
        return;
    }

    pontos += multiplicador;

    if (pontos >= 100) {
        multiplicador = 2 ** Math.floor(pontos / 100);
    }

    txtPontos.innerText = pontos;
    txtMultiplicador.innerText = multiplicador;

    if (!timer) {
        timer = setInterval(function() {
            tempo --;
            txtTempo.innerText = tempo;

            if (tempo === 0) { 
                clearInterval(timer);
                butao.disabled = true
                timer = null

                mensagem.innerText =
                    "Tempo esgotado! Você fez " + pontos + " pontos.";
            }
        }, 1000)
    }

    if (pontos === Infinity) {
        video.style.display = "block"
        video.play();

        return;
    }
}

    