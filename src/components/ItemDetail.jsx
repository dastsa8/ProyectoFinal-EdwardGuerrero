import React, { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (count) => {
    setQuantity(count);
    console.log(`Agregado al carrito: ${count} unidades de ${product.title}`);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        {quantity > 0 ? (
          <button className="checkout-btn">Terminar compra</button>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;