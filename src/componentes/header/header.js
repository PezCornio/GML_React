import "./header.css"


const Header = () => {



    return (<header>
        <div className="header"  >
        <img src="/img/logogml.png" alt="Logo" className="header__logo"/>
        <navbar>
            <ul>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </navbar>
        </div>
        
    </header>)
    
}

export default Header