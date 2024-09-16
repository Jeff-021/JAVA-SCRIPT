const valueInMeters1 = prompt(
  "Bem vindo(a) ao nosso conversor de medidas, coloque um valor em metros"
);
const option = prompt(
  "Perfeito..., agora escolha uma opção para qual o valor de metros será convertido!\n a) Milímetros\n b) Centímetros\n c) Decímetro\n d) Decâmetro\n e) Hectômetro\n f) Quilômetro"
);

const valueInMeters = parseFloat(valueInMeters1);

switch (option) {
  case "a":
    alert(
      `O valor ${valueInMeters} metro(s), convertido em Milímetros seria em ` +
        valueInMeters * 1000 +
        " Milímetros"
    );
    break;

  case "b":
    alert(
      `O valor ${valueInMeters} metro(s), convertido em Centímetros seria em ` +
        valueInMeters * 100 +
        " Centímetros"
    );
    break;

  case "c":
    alert(
      `O valor ${valueInMeters} metro(s), convertido em Decímetro seria em ` +
        valueInMeters * 10 +
        " Decímetro"
    );
    break;

  case "d":
    alert(
      `O valor ${valueInMeters} metro(s), convertido em Decâmetro seria em ` +
        valueInMeters / 10 +
        " Decâmetro"
    );
    break;

  case "e":
    alert(
      `O valor ${valueInMeters} metro(s), convertido em Hectômetro seria em ` +
        valueInMeters / 100 +
        " Hectômetro"
    );

    break;
  case "f":
    alert(
      `O valor ${valueInMeters} metro(s), convertido em Quilômetros seria em ` +
        valueInMeters / 1000 +
        " Quilômetros"
    );
    break;

  default:
    alert("Nenhuma opção selecionada, tente de novo!");
}
