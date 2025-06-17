import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: '200px', objectFit: 'contain', padding: '1rem' }}
      />
      <Card.Body className="d-flex flex-column">
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