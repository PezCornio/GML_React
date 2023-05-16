import "./header.css"
import { Link } from "react-router-dom"


const Header = () => {



    return (<header>
        <div className="header"  >
        <img src="/img/logogml.png" alt="Logo" className="header__logo"/>
        <navbar>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="./cursos">Cursos</Link></li>
                <li><a href="#">Staff</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </navbar>
        </div>
        
    </header>)
    
}

export default Header