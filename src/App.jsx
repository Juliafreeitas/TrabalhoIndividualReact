import React from "react";
import Calculadora from "./components/Calculadora";
import "./Estilo.css";

export default function App() {
  return (
    <div>
      <header>
        <h1>Calculadora de IMC</h1>
        <h3>Indice de massa corporal</h3>
      </header>
      <body>
        <div className="calc">
          <Calculadora />
        </div>
      </body>
      <footer>
        <h4>Nome: Julia Costa Freitas</h4>
      </footer>
    </div>
  );
}
