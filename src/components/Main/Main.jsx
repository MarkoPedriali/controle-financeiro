import { useState } from 'react';
import './output.css';

function Main(){   
    var[saldo,setSaldo] = useState(0);
    const[tipo, setTipo] = useState('compra');
    const[nome, setNome] = useState('');
    const[valor, setValor] = useState('');

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
    }

    const handleSubmit = async e => {
        e.preventDefault();

        var item = {
            "tipo":tipo,
            "nome":nome,
            "valor":valor
        }
       
        handleReset();

        extrato(item);
    };

    const extrato = (item) =>{  
        var tipo = item.tipo;
        var valor = parseFloat(item.valor);
        
        tipo === "venda" ? setSaldo(saldo += valor) : setSaldo(saldo -= valor);
        
        console.log(saldo);
    }

    return(
        <main id="main">
            <div className="transacao">
                <form id="forms" onSubmit={handleSubmit}>
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