import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <Card
      className="h-100 shadow-sm"
      bg="light"
      text="dark"
      border="grey"
      style={{ width: '18rem' }}
    >
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: '200px', objectFit: 'fill', padding: '1rem' }}
      />
      <Card.Body className="b-flex flex-column">
        <Card.Title className="fs-6">{product.title}</Card.Title>
        <Card.Text className="text-success fw-bold mt-auto">${product.price}</Card.Text>
        <Button
          as={Link}
          to={`/item/${product.id}`}
          variant="outline-dark"
          size="sm"
          className="mt-2"
        >
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;