import "../assets/css/cursos.css"
import CardsCursos from "../componentes/cardsCursos/cards.cursos"


const Cursos = () => {
    return(
        <div className="container">
            <h1>Cursos disponibles</h1>
            <div className="cards_container">
            <CardsCursos/>
            </div>

            

            
        </div>
    )
}

export default Cursos