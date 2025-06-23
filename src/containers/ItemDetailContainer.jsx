import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Spinner, Alert, Badge } from 'react-bootstrap';
import ItemCount from '../components/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { mockAPI } from '../mockAPI';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { itemId } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await mockAPI.getById(parseInt(itemId));
        if (!data) throw new Error('Producto no encontrado');
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  const handleAdd = (quantity) => {
    addToCart({ ...product, quantity });
  };

  if (loading) return (
    <div className="text-center my-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  );

  if (error) return (
    <Alert variant="danger" className="my-5">
      {error}
    </Alert>
  );

  return (
    <Card className="my-5">
      <div className="row g-0">
        <div className="col-md-6 p-4">
          <Card.Img
            src={product.image}
            className="img-fluid rounded-start"
            style={{ maxHeight: '500px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <Card.Body className="h-100 d-flex flex-column p-4">
            <Card.Title>{product.title}</Card.Title>
            <Badge bg="secondary" className="mb-3 align-self-start">
              {product.category}
            </Badge>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text className="fs-3 text-primary fw-bold">
              ${product.price}
            </Card.Text>
            <div className="mt-auto">
              <ItemCount
                stock={10}
                initial={1}
                onAdd={handleAdd}
              />
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default ItemDetailContainer;