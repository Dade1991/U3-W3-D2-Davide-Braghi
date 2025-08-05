import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="CustomNavbar">
      <Container fluid>
        <div>
          <img
            className="spaceNewsPNG"
            src="..\public\Space_logo.png"
            alt="Space logo"
          />
          <Link className="navbar-brand" to="/">
            Space NEWS
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="linkNavbar" to="/">
              Home
            </Link>
            <Link className="linkNavbar" to="/">
              Other
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
