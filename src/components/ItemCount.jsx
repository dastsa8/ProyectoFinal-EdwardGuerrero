import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="d-flex flex-column align-items-center">
      <ButtonGroup size="sm" className="mb-2">
        <Button variant="outline-secondary" onClick={decrement}>-</Button>
        <Button variant="light" disabled>{count}</Button>
        <Button variant="outline-secondary" onClick={increment}>+</Button>
      </ButtonGroup>
      <Button
        variant="dark"
        size="sm"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;