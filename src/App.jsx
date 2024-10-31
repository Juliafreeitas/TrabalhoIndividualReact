import React from "react";
import Calculadora from "./components/Calculadora";
import "./Estilo.css";

export default function App() {
  return (
    <div>
      <header className="cabecalho">
        <h1>Calculadora de IMC</h1>
        <h3>Indice de massa corporal</h3>
      </header>
      <body className="corpo">
        <div className="calc">
          <Calculadora />
        </div>
      </body>
      <footer className="rodape">
        <h3>Nome: Julia Costa Freitas</h3>
      </footer>
    </div>
  );
}
