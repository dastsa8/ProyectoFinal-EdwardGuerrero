import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

function CartWidget({ itemCount = 0 }) {
  return (
    <Link to="/cart" className="text-decoration-none text-white">
      <div className="d-flex align-items-center">
        <span className="me-1">🛒</span>
        {itemCount > 0 && (
          <Badge pill bg="danger" className="ms-1">
            {itemCount}
          </Badge>
        )}
      </div>
    </Link>
  );
}

export default CartWidget;