import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map(product => (
        <div key={product.id} className="item-card">
          <Link to={`/item/${product.id}`}>
            <Item product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;