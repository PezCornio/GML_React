import "./cards.cursos.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const CardsCursos = (props) => {
    return (
        
            
            <Card className="card">
                <img src="/img/Reactlogo3.webp" alt="logo react"/>
                
            <CardContent>
            <h3>{props.titulo}</h3>
            <p>{props.resumen}</p>
            <p>{props.precio}</p>
            </CardContent>
                
                
                
            </Card>
        
    )
}

export default CardsCursos