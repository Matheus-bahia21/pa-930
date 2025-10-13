import { link } from "react-router-dom"; 
import '.style.css';

function HEADER()  {
    return ( 
        <header className="header-container">
            <div className='logo'>sistema de clientes</div>
            <nav>
                <link to="/">Home</link>
                <link to="/cadastro">cadastrar</link>
                <link to="/lista">listar</link>
            </nav>
        </header>
    );
}
export default HEADER;