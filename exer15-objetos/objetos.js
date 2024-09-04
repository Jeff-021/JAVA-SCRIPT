// os obj são determidados por {}, funcionam como uma variavel
const pessoa = {};
pessoa.nome = "Jeferson";
pessoa.idade = 21;
pessoa.colegas = ["Lucas", "Gilberto", "Igor", "Ryan", "Kaique", "Vinicius"];
pessoa.endereco = {
  rua: "skskskksksksk",
  numero: 4,
  bairro: "Centro",
};
console.log(pessoa); // posso colocar arrays dentro de obj e obj dentro de obj tbm

const restaurante = {
  nome01: "Restaurante da Praça",
  endereco: "Rua dos Pescadores, 123",
  horarioFuncionamento: {
    segundaFeira: "18h às 22h",
    terçaFeira: "18h às 22h",
    quartaFeira: "18h às 22h",
  },
  menu: {
    Entradas: ["Bruschetta", "Salada Caprese"],
    PratoPrincipal: ["Risoto de cogumelos", "Frango Assado com legumes"],
  },
};

console.log(restaurante);
