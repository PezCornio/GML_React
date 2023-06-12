import "../assets/css/cursos.css";
import Titulos from "../componentes/titulos/titulos";
import CardsCursos from "../componentes/cardsCursos/cards.cursos";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Cursos = () => {
  return (
    <Container className="container">
      <Titulos titulo="Cursos disponibles" />
      <Box component="div" className="cards_container">
        <CardsCursos
          logo="/img/logoreact2.jpg"
          alt="logo React"
          nombre="React Js."
          precio="$15.000"
          resumen="Aprenda a utilizar la librería más solicitada del mercado."
        />
        <CardsCursos
          alt="logo mysql"
          logo="/img/logomysql.png"
          nombre="Base de Datos"
          precio="$15.000"
          resumen="Aprenda a utilizar la librería más solicitada del mercado."
        />
        <CardsCursos
          alt="logo desarrollo"
          logo="/img/dweblogo.jpg"
          nombre="Desarrollo Web"
          precio="$15.000"
          resumen="Aprenda a utilizar la librería más solicitada del mercado."
        />
      </Box>
    </Container>
  );
};

export default Cursos;
