import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import Item from '../components/Item';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = categoryId
          ? `https://fakestoreapi.com/products/category/${categoryId}`
          : 'https://fakestoreapi.com/products';

        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al cargar productos');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return (
    <div className="text-center my-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  );

  if (error) return (
    <Alert variant="danger" className="my-5">
      Error: {error}
    </Alert>
  );

  return (
    <>
      <h2 className="my-4">
        {categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}
      </h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <Item product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ItemListContainer;