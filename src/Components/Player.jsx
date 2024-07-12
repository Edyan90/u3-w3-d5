import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import BranoCorrente from "./BranoCorrente";
const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Row className="h-100 flex-column justify-content-center ">
          <Col xs={2}>
            <BranoCorrente />
          </Col>
          <Col xs={6} md={4} className="playerControls">
            <div className="d-flex">
              <a href="#">
                <img src={shuffle} alt="shuffle" />
              </a>
              <a href="#">
                <img src={prev} alt="prev" />
              </a>
              <a href="#">
                <img src={play} alt="play" />
              </a>
              <a href="#">
                <img src={next} alt="next" />
              </a>
              <a href="#">
                <img src={repeat} alt="repeat" />
              </a>
            </div>
            <ProgressBar className="mt-3">
              <ProgressBar now={60} />
            </ProgressBar>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default Player;
