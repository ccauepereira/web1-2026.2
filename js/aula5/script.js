function exibirPerfilUsuario(nomeUsuario, idadeUsuario, alturaUsuario) {
    console.log("--- 1. Variaveis e tipos---");
    console.log(`Olá, meu nome é ${nomeUsuario}, tenho ${idadeUsuario} e minha altura é ${alturaUsuario}`);
    console.log("Tipo de nome: ", typeof nomeUsuario);
    console.log("Tipo de idade", typeof idadeUsuario);
    console.log("Tipo de altura:", typeof alturaUsuario);
}

console.log("10" + 5);   // "105"
console.log("10" - 5);   // 5
console.log("10" == 10); // true
console.log("10" === 10); // false

function obterStatusNota(notaUsuario) {
    if (notaUsuario >= 7) {
        return "Aprovado";
    } else if (notaUsuario >= 5) {
        return "Final";
    } else {
        return "Reprovado";
    }
}

function obterDiaDaSemana(numeroDia) {
    switch (numeroDia) {
        case 1: return "Domingo";
        case 2: return "Segunda";
        case 3: return "Terça";
        case 4: return "Quarta";
        case 5: return "Quinta";
        case 6: return "Sexta";
        case 7: return "Sábado";
        default: return "Número inválido";
    }
}

function verificarAnoBi(anoInformado) {
    const ehBi = (anoInformado % 4 === 0 && anoInformado % 100 !== 0) || (anoInformado % 400 === 0);
    return ehBi;
}

function mostrarNota() {
    const nota = Number(document.getElementById("nota").value);
    document.getElementById("resNota").innerText = obterStatusNota(nota);
}

function mostrarDia() {
    const dia = Number(document.getElementById("dia").value);
    document.getElementById("resDia").innerText = obterDiaDaSemana(dia);
}

function mostrarAno() {
    const ano = Number(document.getElementById("ano").value);
    const ehBissexto = verificarAnoBi(ano);
    document.getElementById("resAno").innerText = ehBissexto ? "É bissexto" : "Não é bissexto";
}

// Nova função chamada pelo onfocus
function prepararCampo(elementoInput, idResultado) {
    elementoInput.value = "";
    document.getElementById(idResultado).innerText = "";
}
