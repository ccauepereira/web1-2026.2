function contar() {
  var x = Number(document.querySelector("#numero").value);
  let caixa = document.querySelector("#resultado");

  caixa.innerHTML = "";

  for (let k = 0; k <= x; k++) {
    console.log("Contando:", k);

    let item = document.createElement("li");
    item.textContent = k;
    caixa.appendChild(item);
  }
}

function apagar() {
  let caixa = document.querySelector("#resultado");
  caixa.innerHTML = "";
  console.log("Lista apagada!");
}

document.querySelector("#btn-contar").addEventListener("click", contar);
document.querySelector("#btn-apagar").addEventListener("click", apagar);

