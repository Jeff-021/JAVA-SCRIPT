function useLightTheme() {
  document.body.style.color = "#212529"; // isso é a cor da letra
  document.body.style.backgroundColor = "#f1f5f9"; // cor do fundo
}

function useDarkTheme() {
  document.body.style.color = "#f1f5f9"; // isso é a cor da letra
  document.body.style.backgroundColor = "#212529"; // cor do fundo
}

document.getElementById("light01").addEventListener("click", useLightTheme); // ja estou associando o botao do tema claro eadicionando o evento
document.getElementById("dark01").addEventListener("click", useDarkTheme);
