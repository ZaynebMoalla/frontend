import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom'
function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <h2>Ecommerce</h2>
      <Container>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/articles" >Home</Nav.Link>
          <Nav.Link as={Link} to="/categories">Catégories</Nav.Link>
           <Nav.Link as={Link} to="/scategories">Sous Catégories</Nav.Link> 
           <Nav.Link as={Link} to="/articles">Liste des Articles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;