import "./SeletorCliente.css";

function SeletorCliente({ cliente, setCliente }) {
  return (
    <select 
        value={cliente} 
        onChange={(e) => 
        setCliente(e.target.value)}>
            
        <option value="">Selecione</option>
        <option value="comum">Comum</option>
        <option value="vip">VIP</option>
        <option value="funcionario">Funcionário</option>
        <option value="parceiro">Parceiro</option>
    </select>
  );
}

export default SeletorCliente;