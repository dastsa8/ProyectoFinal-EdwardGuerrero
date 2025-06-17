import { Button, Table, Badge, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
    const { cart, removeFromCart, clearCart, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <Alert variant="info" className="text-center my-5">
                <Alert.Heading>Tu carrito está vacío</Alert.Heading>
                <p>Mira </p>
                <Button as={Link} to="/products" variant="primary">
                    Ver productos
                </Button>
            </Alert>
        );
    }

    return (
        <div className="my-5">
            <h2 className="mb-4">Tu Carrito de Compras</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total:</td>
                        <td colSpan="2" className="fw-bold">${totalPrice.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </Table>
            <div className="d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={clearCart}>
                    Vaciar Carrito
                </Button>
                <Button variant="success" as={Link} to="/checkout">
                    Finalizar Compra
                </Button>
            </div>
        </div>
    );
}

export default Cart;