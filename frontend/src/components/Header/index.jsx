import { Link } from "react-router-dom";    
import "./ style.css";

function Header() {
  return (
    <header className="header-container">
        <div className ="logo">gerenciador de usuários</div>
        <nav>
            <link to = "/"> Home </link>
            <link to = "/cadastro"></link> 
            <link to = "/listar"> listar Usuário </link> 
        </nav>
    </header>
  );
}   

export default Header;