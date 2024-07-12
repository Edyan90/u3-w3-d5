import { Button, Col, Collapse, Container, Form, FormControl, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRicercaAction } from "../actions/ricercaAction";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getRicercaAction(search));
  };
  return (
    <Col className="col-2">
      <Navbar expand="md" className="fixed-left justify-content-between" style={{ height: "95vh" }} id="sidebar">
        <Container fluid className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" /* onClick={() => setOpen(!open)} */ />
          <Collapse>
            <Navbar.Collapse id="navbarNavAltMarkup">
              <Nav className="flex-column">
                <Nav.Link href="#" className="d-flex align-items-center">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
                <Form
                  className="mt-3"
                  onSubmit={() => {
                    handleSubmit();
                  }}
                >
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    <div className="input-group mt-3">
                      <Button variant="outline-secondary" size="sm">
                        GO
                      </Button>
                    </div>
                  </InputGroup>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <Nav>
            <Nav.Link href="#">Cookie Policy</Nav.Link> |<Nav.Link href="#">Privacy</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </Col>
  );
};
export default SideBar;
