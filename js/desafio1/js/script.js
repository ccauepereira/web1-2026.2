function calcular(operacao) {
    let valor1 = document.getElementById("iptNum1").value;
    let valor2 = document.getElementById("iptNum2").value;
    let spnResultado = document.getElementById("spnResultado");

    if (valor1 === "" || valor2 === "") {
        spnResultado.innerText = "Por favor, preencha os dois números!";
    } else {
        let n1 = Number(valor1);
        let n2 = Number(valor2);

        if (operacao === "somar") {
            spnResultado.innerText = `A soma de ${n1} + ${n2} é igual a ${n1 + n2}.`;
        } else if (operacao === "subtrair") {
            spnResultado.innerText = `A subtração de ${n1} - ${n2} é igual a ${n1 - n2}.`;
        } else if (operacao === "multiplicar") {
            spnResultado.innerText = `A multiplicação de ${n1} x ${n2} é igual a ${n1 * n2}.`;
        } else if (operacao === "dividir") {
            if (n2 === 0) {
                spnResultado.innerText = "Não é possível dividir por zero!";
            } else {
                spnResultado.innerText = `A divisão de ${n1} ÷ ${n2} é igual a ${n1 / n2}.`;
            }
        }
    }
}