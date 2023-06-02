import "./header.css"
import { Link } from "react-router-dom"


const Header = () => {



    return (<header>
        <div className="header" style={{ 
      backgroundImage: `url("./img/low-poly-grid-haikei.svg")` 
    }} >
        <img src="/img/logogml.png" alt="Logo" className="header__logo"/>
        <navbar>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="./cursos">Cursos</Link></li>
                <li><Link to="./staff">Staff</Link></li>
                <li><Link to="./contacto">Contacto</Link></li>
            </ul>
        </navbar>
        </div>
        
    </header>)
    
}

export default Header