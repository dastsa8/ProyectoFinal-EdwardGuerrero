import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useCart } from "./CartContext";
import { getProduct } from "../firebase/db";
import "../css/ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(itemId);
        setProduct(productData);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  const handleAdd = (quantity) => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.name || product.title,
        price: product.price,
        image: product.image,
        quantity
      });
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center my-5">Product not found</div>;
  }

  return (
    <Card className="my-5 shadow">
      <div className="row g-0">
        <div className="col-md-6 p-4">
          <Card.Img
            src={product.image}
            className="img-fluid rounded-start"
            style={{ maxHeight: '500px', objectFit: 'contain' }}
            alt={product.name || product.title}
          />
        </div>
        <div className="col-md-6">
          <Card.Body className="p-4">
            <Card.Title as="h2">{product.name || product.title}</Card.Title>
            <Card.Text className="text-muted">{product.category}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text className="fs-3 text-primary fw-bold">
              ${product.price}
            </Card.Text>
            <ItemCount
              stock={product.stock || 10}
              initial={1}
              onAdd={handleAdd}
            />
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}