let pessoa = {
  nome: "Jeferson",
  idade: 21,
  Profissao: "Programador JR",
  dizerOla() {
    console.log("Olá mundo!, o meu nome é " + this.nome, "Tenho " + this.idade);
  },
};

console.log(pessoa);
pessoa.dizerOla(); // serve para organizar o código, colocando atribuicoes a ele, como se fosse um titulo

// funcao recursiva= ela chama ela mesma e ira se executar de novo!, no exemplo abaixo ela ira ver se um numero é par, se for ela ira dividir ele por 2, até q ele vire um num impar, ela só ira mostrar o numero

function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    // aqui diz que se o resto da divisao for igual a 0 ele ira dividir o numero por 2, se nao ele ira só mostrar o numero com o return
    dividir(num / 2);
  } else {
    return num;
  }
}
dividir(40);

//function dobrar(num) {
//console.log(num);
//dobrar(num * 2);

//dobrar(1); // esse é um exemplo de funcao infinita, para funcoes recursivas a gente tem que dar um jeito de fazer ela parar, de preferencia colocando if e else

function fatorial(num) {
  console.log("Numero " + num);
  if (num === 0) {
    return 1; // caso base do fatorial
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + " * !" + (num - 1));
    return num * fatorial(num - 1);
  }
}
console.log(fatorial(5));
