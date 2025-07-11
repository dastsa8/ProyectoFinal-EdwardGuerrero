import React, { useState } from 'react';
import { useCart } from './CartContext';
import '../css/Checkout.css';
import { Button } from 'react-bootstrap';

function Checkout() {
    const { cart, totalPrice, clearCart } = useCart();
    const [formData, setFormData] = useState({ name: '', card: '' });
    const [loading, setLoading] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setOrderComplete(true);
            clearCart();
        }, 2000);
    };

    if (orderComplete) {
        return (
            <div className="text-center mt-5">
                <h2>¡Gracias por tu compra, {formData.name}!</h2>
                <Button variant="primary" href="/" className="mt-3">
                    Volver al Catálogo
                </Button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Finalizar compra</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
                <input
                    type="text"
                    className='checkout-input'
                    placeholder="Tu nombre"
                    value={formData.name}
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="text"
                    className='checkout-input'
                    placeholder="Número de teléfono"
                    value={formData.card}
                    required
                    onChange={(e) => setFormData({ ...formData, card: e.target.value })}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Procesando...' : `Pagar $${totalPrice}`}
                </button>
            </form>
        </div>
    );
}

export default Checkout;
