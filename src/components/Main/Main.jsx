import { useState } from 'react';
import './output.css';

function Main(){

    const[tipo, setTipo] = useState('compra');
    const[nome, setNome] = useState('');
    const[valor, setValor] = useState('');

    var item = tipo + nome + valor;

    const handleSubmit = async e => {
        e.preventDefault();
        alert(item);
    };


    return(
        <main id="main">
            <div className="transacao">
                <form onSubmit={handleSubmit}>
                    <label for="tipo"><h4>Tipo de transação</h4></label>
                    <select name="tipo" className="inputs" onChange={e => setTipo(e.target.value)} required>
                        <option selected value="compra" className="options">Comprar</option>
                        <option value="venda" className="options">Vender</option>
                    </select>
                    <label for="produto"><h4>Nome da mercadoria</h4></label>
                    <input type="text" name="produto" className="inputs" onChange={e => setNome(e.target.value)} required ></input>
                    <label for="valor"><h4>Valor</h4></label>
                    <input type="number" className="inputs" onChange={e => setValor(e.target.value)} required></input>
                    <button type="submit">ADICIONAR</button>
                </form>
            </div>
            <div className="extrato">
                <h2>Extrato das transações</h2>
                <div className="lista-produtos">
                    <p>produto</p>
                    <p>produto</p>
                    <p>produto</p>
                </div>
                <h2 id="total">Total</h2>
            </div>
        </main>
    );
}

export default Main;