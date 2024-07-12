import { Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import MainSection from "./MainSection";
import Player from "./Player";

const Home = () => {
  return (
    <Container fluid id="reactbody">
      <Row>
        <SideBar />
        {/*  <MainSection /> */}
      </Row>
      {/*  <Player /> */}
    </Container>
  );
};
export default Home;
