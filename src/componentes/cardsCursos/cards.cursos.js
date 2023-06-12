import "./cards.cursos.css";
import Card from "@mui/material/Card";


import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';

const CardsCursos = (props) => {
  return (
    <Card className="card">
      <box className="caja_logo">
        <img src={props.logo} alt={props.alt} />
      </box>

      <CardContent className="card_contenido">
        <h3 className="card_titulo">{props.nombre}</h3>
        <p className="card_resumen">{props.resumen}</p>
        <p className="card_precio">{props.precio}</p>
        <Button variant="outlined" size="small" className="card_boton">Más Info...</Button>
      </CardContent>
    </Card>
  );
};

export default CardsCursos;
