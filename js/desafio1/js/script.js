function somar() {
    let n1 = Number(document.getElementById("iptNum1").value);
    let n2 = Number(document.getElementById("iptNum2").value);
    
    let soma = n1 + n2;

    document.getElementById("spnResultado").innerText = soma;
}

function limpar() {
    document.getElementById("iptNum1").value = "";
    document.getElementById("iptNum2").value = "";
    document.getElementById("spnResultado").innerText = "0";
}