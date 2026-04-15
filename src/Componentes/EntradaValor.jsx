import "./EntradaValor.css"

function EntradaValor({valor, setValor}) {
    return (
        <input
            type="number"
            placeholder="Digite o valor"
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}>
        </input>
    )
}

export default EntradaValor;