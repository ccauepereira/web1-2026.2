// ==========================================
// FUNÇÕES PRINCIPAIS (Chamadas pelo HTML)
// ==========================================

function mostrar() {
    const quantidade = Number(document.getElementById("iptX").value);
    const caixaInputs = document.getElementById("games_boxes");
    const divResultado = document.getElementById("game_output");

    caixaInputs.innerHTML = "";
    divResultado.innerHTML = "";

    if (!ehQuantidadeValida(quantidade)) {
        alert("Digite uma quantidade válida!");
        return;
    }

    renderizarCampos(caixaInputs, quantidade);
}

function criarJogo() {
    const inputs = Array.from(document.querySelectorAll(".input-gerado"));

    if (!validarJogo(inputs)) return;

    const numeroEscolhido = Number(document.getElementById("iptEscolha").value);
    const numerosDisponiveis = inputs.map(input => Number(input.value));

    const numeroSorteado = sortearNumero(numerosDisponiveis);
    const estatisticas = calcularProbabilidade(numerosDisponiveis, numeroEscolhido);

    exibirResultado(numeroSorteado, numeroEscolhido, estatisticas);
}

function limpar() {
    document.getElementById("iptX").value = "";
    document.getElementById("iptEscolha").value = "";
    document.getElementById("games_boxes").innerHTML = "";
    document.getElementById("game_output").innerHTML = "";
}

// ==========================================
// FUNÇÕES AUXILIARES (Responsabilidade Única)
// ==========================================

function ehQuantidadeValida(quantidade) {
    return !isNaN(quantidade) && quantidade > 0;
}

function renderizarCampos(container, quantidade) {
    for (let i = 1; i <= quantidade; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "input-gerado";
        input.value = i;
        container.appendChild(input);
    }
}

function validarJogo(inputs) {
    if (inputs.length === 0) {
        alert("Gere os inputs primeiro!");
        return false;
    }

    const textoEscolha = document.getElementById("iptEscolha").value.trim();
    if (textoEscolha === "" || isNaN(Number(textoEscolha))) {
        alert("Digite um número para escolher!");
        return false;
    }

    const existeCampoVazio = inputs.some(input => input.value.trim() === "");
    if (existeCampoVazio) {
        alert("Preencha todos os campos gerados antes de jogar!");
        return false;
    }

    return true;
}

function sortearNumero(listaNumeros) {
    const indiceAleatorio = Math.floor(Math.random() * listaNumeros.length);
    return listaNumeros[indiceAleatorio];
}

function calcularProbabilidade(listaNumeros, alvo) {
    const total = listaNumeros.length;
    const frequencia = listaNumeros.filter(num => num === alvo).length;
    const porcentagem = ((frequencia / total) * 100).toFixed(2);

    return { total, frequencia, porcentagem };
}

function exibirResultado(sorteado, escolhido, stats) {
    const acertou = sorteado === escolhido;
    const feedback = acertou
        ? "<span style='color: green;'>Você ACERTOU o sorteio! 🎉</span>"
        : "<span style='color: red;'>Você ERROU o sorteio! ❌</span>";

    const divResultado = document.getElementById("game_output");
    divResultado.innerHTML = `
        <p>Número Sorteado: <strong>${sorteado}</strong></p>
        <p>Seu número escolhido: <strong>${escolhido}</strong></p>
        <p>Probabilidade de saída: <strong>${stats.porcentagem}%</strong> (${stats.frequencia} vez(es) em ${stats.total})</p>
        <p>${feedback}</p>
    `;
}
