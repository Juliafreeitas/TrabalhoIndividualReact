import React from "react";
import { useState } from "react";

export default function Calculadora() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState("");

  function calcImc(e) {
    e.preventDefault();
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
      setResultado("Você está abaixo do peso");
    } else if (imc > 18.5 && imc < 24.9) {
      setResultado("Você está no peso ideal (eutrofia)");
    } else if (imc > 25 && imc < 29.9) {
      setResultado("Você está acima do peso (sobrepeso)");
    } else if (imc > 30 && imc < 34.9) {
      setResultado("Você está acima do peso (obesidade grau 1)");
    } else if (imc > 35 && imc < 39.9) {
      setResultado("Você está acima do peso (obesidade grau 2)");
    } else if (imc > 40) {
      setResultado("Você está acima do peso (obesidade extrema)");
    } else {
      setResultado("-")
    }
  }

  return (
    <div>
      <form onSubmit={calcImc}>
        <label>Digite seu peso </label> 

        <input className="input"
          type="text"
          placeholder="Digite seu peso em kg"
          name="peso"
          onChange={(e) => setPeso(e.target.value)}
        /> <br />

        <label>Digite sua altura </label>

        <input className="input"
          type="text"
          placeholder="Digite sua altura em m"
          name="altura"
          onChange={(e) => setAltura(e.target.value)}
        /> <br />

        <button type="submit" className="botao">Calcular</button>

        <p>Resultado: {resultado}</p>
      </form>
    </div>
  );
}
