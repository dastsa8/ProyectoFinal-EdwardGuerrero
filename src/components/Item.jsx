import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <Card
      className="h-100 shadow-sm"
      bg="light"
      text="dark"
      border="grey"
      style={{ width: '18rem', display: 'flex', flexDirection: 'column', gap: '1rem', flexWrap: 'wrap' }}
    >
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: '200px', objectFit: 'fill', padding: '1rem' }}
      />
      <Card.Body className="d-flex flex-column justify-content-between flex-grow-1">
        <Card.Title className="fs-6">{product.title}</Card.Title>
        <Card.Text className="text-success fw-bold mt-auto">${product.price}</Card.Text>
        <Button
          as={Link}
          to={`/item/${product.id}`}
          variant="outline-primary"
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