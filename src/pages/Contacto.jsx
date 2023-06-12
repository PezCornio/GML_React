import "../assets/css/contacto.css";
import Titulos from "../componentes/titulos/titulos";
import Container from "@mui/material/Container";


const Contacto = () => {
  return (
    <Container maxWidth="lg" className="container">
      <Titulos titulo="Formulario de contacto" />
    </Container>
  );
};

export default Contacto;
