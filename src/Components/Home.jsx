import { Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import MainSection from "./MainSection";
import Player from "./Player";

const Home = () => {
  <Container fluid>
    <Row>
      <SideBar />
      <MainSection />
    </Row>
    <Player />
  </Container>;
};
export default Home;
