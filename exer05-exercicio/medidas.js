let valorMetros = prompt("Digite um valor em metros");
let opcao = prompt(
  "Com o valor já definido escolha a opção para a conversão\n a) Milímetros\n b) Centímetros\n c) Decímetro\n d) Decâmetro\n e) Hectômetro\n f) Quilômetro"
);

let valoremMetros = parseFloat(valorMetros); //o case significa o caso que ira acontecer quando aquela opção for escolhida, o default serve para quando nenhuma das opcções foi escolhida aparecer um aviso na tela, o break serve para parar uma ou mais acoes, posso fazer contas no switch, a variavel (valoremmetros) possibilita isso

switch (opcao) {
  case "a":
    alert(
      "O resultado em Milímetros do valor " +
        valoremMetros +
        "metro(s), seria de: " +
        valoremMetros * 1000 +
        " " +
        "Milímetros!"
    );
    break;

  case "b":
    alert(
      "O resultado em Centímetros do valor " +
        valoremMetros +
        "metro(s), seria de: " +
        valoremMetros * 100 +
        " " +
        "Centímetros!"
    );
    break;

  case "c":
    alert(
      "O resultado em Decímetro do valor " +
        valoremMetros +
        "metro(s), seria de: " +
        valoremMetros * 10 +
        " " +
        "Decímetros!"
    );
    break;

  case "d":
    alert(
      "O resultado em Decâmetro do valor " +
        valoremMetros +
        "metro(s), seria de: " +
        valoremMetros / 10 +
        " " +
        "Decâmetro!"
    );
    break;

  case "e":
    alert(
      "O resultado em Hectômetro do valor " +
        valoremMetros +
        "metro(s), seria de: " +
        valoremMetros / 100 +
        " " +
        "Hectômetro!"
    );
    break;

  case "f":
    alert(
      "O resultado em Quilômetros do valor " +
        valoremMetros +
        "metro(s), seria de: " +
        valoremMetros / 1000 +
        " " +
        "Quilômetros!"
    );
    break;

  default:
    alert("Nenhuma opção selecionada, tente de novo!");
}
