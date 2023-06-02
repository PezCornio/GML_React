import "../assets/css/cursos.css"
import CardsCursos from "../componentes/cardsCursos/cards.cursos"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const Cursos = () => {
    return(
        <Container className="container">
            <h1>Cursos disponibles</h1>
            <Box component="div"  className="cards_container">
            <CardsCursos
                titulo="React Js."
                precio="$15.000"/>
            <CardsCursos
            titulo="Base de Datos"
            precio="$15.000"/>
            <CardsCursos
            titulo="Desarrolo Web"
            precio="$15.000"/>
            </Box>

            

            
        </Container>
    )
}

export default Cursos