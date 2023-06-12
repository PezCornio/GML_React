import "../assets/css/Home.css";
import { Carousel } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

const Home = () => {
  return (
    <Content >
      <div className="carousel_container">
        <Carousel autoplay effect="fade">
          <div>
            <img src="/img/presentacion1.jpg" alt="banner1"></img>
          </div>
          <div>
            <img src="/img/presentacion2.jpg" alt="banner2"></img>
          </div>
          <div>
            <img src="/img/presentacion3.jpg" alt="banner3"></img>
          </div>
        </Carousel>
      </div>
    </Content>
  );
};

export default Home;
