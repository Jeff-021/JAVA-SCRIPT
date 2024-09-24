document.getElementById("button").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);

  const soma = num1 + num2;
  const subtracao = num1 - num2;
  const multiplicacao = num1 * num2;
  const divisao = num1 / num2;

  const num1p = document.createElement("p");
  num1p.textContent = `A soma dos valores ${num1} e ${num2} é ${soma} `;

  const num2p = document.createElement("p");
  num2p.textContent = `A subtração dos números ${num1} e ${num2} é ${subtracao}`;

  const num3p = document.createElement("p");
  num3p.textContent = `A multiplicação dos números ${num1} e ${num2} é ${multiplicacao}`;

  const num4p = document.createElement("p");
  num4p.textContent = `A Divisão dos números ${num1} e ${num2} é ${divisao}`;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  resultadoDiv.appendChild(num1p);
  resultadoDiv.appendChild(num2p);
  resultadoDiv.appendChild(num3p);
  resultadoDiv.appendChild(num4p);

  // Limpando os campos dos inputs
  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";
});
