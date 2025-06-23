import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="items-container">
      {products.map(product => (
        <div key={product.id} className="item-card">
          <Link to={`/item/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;