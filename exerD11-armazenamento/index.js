document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value); // isso serve para guardar uma imformacao mesmo q a pag reinicie, no caso estou guardando o valor do input
  input.value = ""; //isso serve para limpar o input
});
document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("info"); // getIten sig ler o que esta sendo guardado
  alert("A informacao salva foi " + info);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("info2", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const t = localStorage.getItem("info2");
  alert("O texto salvo no local storage é: " + t);
});

// o localStorage salva as informacoes mesmo quando a pag fecha, o sessionStorage salva quando a pag é carregada ´so
