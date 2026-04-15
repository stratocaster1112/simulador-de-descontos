import "./BotaoCalcular.css";

function BotaoCalcular({ calcular }) {
  return <button onClick={calcular}>Calcular</button>;
}

export default BotaoCalcular;