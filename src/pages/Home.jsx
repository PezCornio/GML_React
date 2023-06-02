import "../assets/css/Home.css"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Home = () => {
    return(
        <Container maxWidth="lg">
            <Box className="banner"
                >
                
                <img src="/img/presentacion1.jpg" alt="slide1"/>

            </Box>
        </Container>
    )
}

export default Home