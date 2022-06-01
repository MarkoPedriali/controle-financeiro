import { useState } from 'react';
import './output.css';
import Item from '../Item/Item';

function Main(){   
    var[saldo,setSaldo] = useState('');
    const[tipo, setTipo] = useState('compra');
    const[nome, setNome] = useState('');
    const[valor, setValor] = useState('');
    var [sacola, setSacola] = useState([]);
    console.log(sacola);

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
    }

    const handleSubmit =  e => {
        e.preventDefault();

        var item = {
            "tipo":tipo,
            "nome":nome,
            "valor":valor
        }
        sacola.push(item);
        setSacola(sacola);
        handleReset();

        extrato(item);
    };

    const extrato = (item) =>{  
        var tipo = item.tipo;
        var valor = parseFloat(item.valor);
        
        tipo === "venda" ? setSaldo(saldo += valor) : setSaldo(saldo -= valor);
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
                        {                            
                            sacola.length > 0 ? (
                                <ul>
                                    {
                                        sacola.map((i) => (                                            
                                            <Item nome={i.nome}/>
                                        ))
                                    }                                   
                                </ul>
                            ) : 
                            (<p>Não há produtos na sacola</p> )
                        }                                        
                </div>
                <h2 id="total">{saldo}</h2>
            </div>
        </main>
    );
}

export default Main;