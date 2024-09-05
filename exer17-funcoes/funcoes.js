function ola() {
  console.log("Ola mundo"); // colocar aqui o que quer q aconteça
}

ola();
ola();
ola(); // isso serve para chamar a funcao

//parametros de uma funcao!

function dobro(x) {
  alert("O dobro de " + x + " " + "é " + x * 2); //colocar (x * 2) só nao coloquei pq o editor prettier n deixou
}

dobro(10);
dobro(2); // esse (return) além de chamar a funcao ele coloca o valor no x

// Se uma função for chamada sem informar o parâmetro o valor usado para ele será o undefined. Mas podemos declarar um valor padrão (no caso 'mundo') para um parãmetro, assim, se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
  console.log("Olá, " + nome + "!");
}
dizerOla("Jeff");
dizerOla();

// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula
function soma(a, b, c, d, e) {
  alert("O resultado da soma é "(a + b + c + d + e));
  console.log(a + b + c + d + e);
}
soma(1, 3, 5, 9, 11);
soma(34, 5, 3, 6, 1);

function criarusuario(nome, email, senha, tipo = "adm") {
  // a ordem que esta aqui tem que ser respeitada
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
  criarusuario(Jeferson, jeje, 12345);
  alert("O usuario " + nome, " como e-mail" + email + " coma senha " + senha); // respeitada aqui
}
