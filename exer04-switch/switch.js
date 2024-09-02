const resultado = prompt("Escolha uma cor:\n a) Amarelo\n b) Verde\n c) Azul");

switch (resultado) {
  case "a":
    alert("A cor escolhida foi o Amarelo");
    break;
  case "b":
    alert("A cor escolhida foi o Verde ");
    break;
  case "c":
    alert("A cor escolhida foi o Azul ");
    break;

  default:
    alert("a opção foi não foi incerida corretamente ");
}

// o case significa o caso que ira acontecer quando aquela opção for escolhida, o default serve para quando nenhuma das opcções foi escolhida aparecer um aviso na tela, o break serve para parar uma ou mais acoes
