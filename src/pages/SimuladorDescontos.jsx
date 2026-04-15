import { useState } from "react";
import EntradaValor from "../Componentes/EntradaValor";
import SeletorCliente from "../Componentes/SeletorCliente";
import BotaoCalcular from "../Componentes/BotaoCalcular";
import Resultado from "../Componentes/Resultado";

function SimuladorDescontos() {
    const[valor, setValor] = useState("");
    const[cliente, setCliente] = useState("");
    const[resultado, setResultado] = useState(null);
    const[mensagem, setMensagem] = useState("");

    function calcularDesconto() {
        if(!valor || !cliente) {
            setMensagem("Preencha todos os campos!");
            setResultado(null);
            return;
        }

        let desconto = 0;

        switch(cliente) {
            case "vip":
                desconto = 0.2;
                break;
            case "funcionario":
                desconto = 0.3;
                break;
            case "parceiro":
                desconto = 0.15;
                break;
            case "comum":
                desconto = 0.05;
                break;
            default:
                desconto = 0;
        }

        const valorFinal = valor - valor * desconto;

        setResultado(valorFinal);
        setMensagem("");
    }

    return (
        <div>
            <h1>Simulador de Descontos</h1>

            <div class="container">
                <EntradaValor valor={valor} setValor={setValor} />
                <SeletorCliente cliente={cliente} setCliente={setCliente} />
                <BotaoCalcular calcular={calcularDesconto} />
            </div>

            {mensagem && <p>{mensagem}</p>}
            {resultado !== null && <Resultado valorFinal={resultado} />}
        </div>
    )
}

export default SimuladorDescontos;