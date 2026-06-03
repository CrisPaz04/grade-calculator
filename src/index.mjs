import "./styles.css";

const boton = document.getElementById("botonPromediar");
const result = document.getElementById("result");

boton.addEventListener("click", function () {
  let valorInput1 = document.getElementById("miInput1").valueAsNumber;
  let valorInput2 = document.getElementById("miInput2").valueAsNumber;
  let valorInput3 = document.getElementById("miInput3").valueAsNumber;
  let valorInput4 = document.getElementById("miInput4").valueAsNumber;
  let valorInput5 = document.getElementById("miInput5").valueAsNumber;

  const valores = [
    valorInput1,
    valorInput2,
    valorInput3,
    valorInput4,
    valorInput5,
  ];

  let promedioFinal =
    valorInput1 + valorInput2 + valorInput3 + valorInput4 + valorInput5;
  promedioFinal = promedioFinal / 5;

  result.textContent = promedioFinal;
});
