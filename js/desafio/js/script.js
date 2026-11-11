function mostrar() {
    var objIptNome = document.getElementById("iptNome");
    var username = objIptNome.value;
    var objSpnMsg = document.querySelector("#spnMsg");
    var objSpnContador = document.getElementById("spnContador"); 
    objSpnContador.textContent = username.length;

    if (username.trim() !== "") {
        objSpnMsg.style.display = "block";
        objSpnMsg.style.marginTop = "20px";
        objSpnMsg.style.color = "red";
        objSpnMsg.innerHTML = "O nome digitado é: " + username;
    } else {
        objSpnMsg.innerHTML = "";
    }
}

function limpar() {
    var objIptNome = document.getElementById("iptNome");
    objIptNome.value = "";
    document.querySelector("#spnMsg").innerHTML = "";
    document.getElementById("spnContador").innerHTML = "0";
}
