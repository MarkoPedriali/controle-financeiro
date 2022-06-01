import './output.css';

function Item(props){
    return(
        <>
            <li className={`item-list ${props.tipo}`}>
                <h4>{`-${props.nome}`}</h4>
                <h4>{'R$ '+props.valor+',00'}</h4>
            </li>
        </>
    )
}

export default Item;