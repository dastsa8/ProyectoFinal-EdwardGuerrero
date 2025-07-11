import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useCart } from './CartContext';
import { getCategories } from '../firebase/db';

function NavBar() {
  const { cart } = useCart();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await getCategories();
        setCategories(cats);
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">Inicio</Nav.Link>

            {!loading && (
              <NavDropdown title="Categorías" id="categories-dropdown">
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
            )}
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