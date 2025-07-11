import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import Item from './Item';
import { getProducts, getProductsByCategory } from '../firebase/db';
import '../css/ItemListContainer.css';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
        <p>Cargando productos...</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="my-4">
        {categoryId ? `Categoría de ${categoryId}` : 'Todos los productos'}
      </h2>

      {products.length === 0 ? (
        <Alert variant="info">
          No hay productos disponibles en esta categoría
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4" style={{
          '--min-col-width': '250px',
          '--gap-size': '1rem'
        }}>
          {products.map(product => (
            <Col key={product.id} style={{
              minWidth: 'var(--min-col-width)',
              flex: '1 0 calc(25% - var(--gap-size))'
            }}>
              <Item product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default ItemListContainer;