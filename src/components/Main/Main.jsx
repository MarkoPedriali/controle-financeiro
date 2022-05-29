import './output.css';

function Main(){
    return(
        <main id="main">
            <div className="transacao">
                <form>
                    <label for="tipo"><h4>Tipo de transação</h4></label>
                    <select name="tipo" className="inputs">
                        <option value="compra" className="options">Comprar</option>
                        <option value="venda" className="options">Vender</option>
                    </select>
                    <label for="produto"><h4>Nome da mercadoria</h4></label>
                    <input type="text" name="produto" className="inputs"></input>
                    <label for="valor"><h4>Valor</h4></label>
                    <input type="number" className="inputs"></input>
                    <button>ADICIONAR</button>
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