import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function NavBar() {
  const { cart } = useContext(CartContext);
  const categories = [
    { id: 'electronics', name: 'Electrónica' },
    { id: 'jewelery', name: 'Joyería' },
    { id: "men's clothing", name: 'Ropa Masculina' },
    { id: "women's clothing", name: 'Ropa Femenina' }
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories.map(cat => (
                <NavDropdown.Item
                  key={cat.id}
                  as={NavLink}
                  to={`/category/${cat.id}`}
                >
                  {cat.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget itemCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;