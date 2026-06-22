let tentativas = 0;

function entrar() {

    const senha = document
        .getElementById("senha")
        .value
        .toUpperCase()
        .trim();

    const erro = document.getElementById("erro");

    if (senha === "1234") {

        window.location.href = "./area-trabalho.html";

    } else {

        tentativas++;

        if (tentativas >= 3) {

            erro.innerText =
                'Senha incorreta. Dica: "Foi o último verão em que tudo parecia normal."';

        } else {

            erro.innerText = "Senha incorreta.";

        }

    }

}