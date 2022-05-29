import './output.css';
import menu from "../../assets/menu.png";
import user from "../../assets/user.png";

function Header() {
    return(
        <div>
        <header id="header">
            <nav>
                <img src={menu} className="nav-link icon" id="menu" alt="menu icon"></img>
                <h1 className="nav-link">Controle Financeiro</h1>
                <img src={user} className="nav-link icon" id="user" alt="user login icon"></img>
            </nav>
        </header>
        </div>
    );
}

export default Header;