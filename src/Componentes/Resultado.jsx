import "./Resultado.css";

function Resultado({ valorFinal }) {
  return (
    <h2>Valor final: R$ {valorFinal.toFixed(2)}</h2>
  );
}

export default Resultado;