// src\components\Header\index.jsx
import { NavLink, Link } from 'react-router-dom'
import './style.css';
import logo from '../../assets/imagens/logo.png'

function Header() {
    return (
        <header className="header">
            <div className="header_wrap">
                <div className="header-left">
                    <Link to="/" className="contabilidade-link">Contabilidade</Link>
                </div>
                <div className="header-center">
                    <div className="logo">
                        <img src={logo} alt="Logo da Contabilidade" />
                    </div>
                </div>
                <nav className="header-right nav">
                    <NavLink to="/servicos" className="link">Serviços</NavLink>
                    <NavLink to="/sobre-nos" className="link">Sobre Nós</NavLink>
                    <NavLink to="/fale-conosco" className="link">Fale Conosco</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;