import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import '../css/CartWidget.css';

function CartWidget({ itemCount = 0 }) {
  return (
    <Link to="/cart" className="cart-button text-decoration-none">
      <div className="d-flex align-items-center position-relative">
        <FaShoppingCart size={24} className="cart-icon" />
        {itemCount > 0 && (
          <Badge pill bg="danger" className="cart-badge">
            {itemCount}
          </Badge>
        )}
      </div>
    </Link>
  );
}

export default CartWidget;
