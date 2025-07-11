import { useState } from 'react';
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import '../css/ItemCount.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);
  const [showModal, setShowModal] = useState(false);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="item-count-container d-flex flex-column align-items-center">
      <ButtonGroup size="sm" className="mb-3 count-buttons">
        <Button variant="outline-primary" onClick={decrement} disabled={count <= 1}>-</Button>
        <Button variant="light" disabled className="count-display">{count}</Button>
        <Button variant="outline-primary" onClick={increment} disabled={count >= stock}>+</Button>
      </ButtonGroup>

      <Button
        variant="primary"
        size="sm"
        onClick={handleAdd}
        disabled={stock === 0}
        className="add-to-cart-btn"
      >
        Agregar al carrito
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Éxito!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {count} unidad{count > 1 ? 'es' : ''} agregada{count > 1 ? 's' : ''} al carrito.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Cerrar</Button>
          <Link to="/Cart" className="btn btn-secondary" onClick={handleClose}>Ir al carrito</Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ItemCount;
