import React from 'react';

const Item = ({ item, shouldDiscount }) => {
  const price = shouldDiscount ? item.price * (1 - item.discount) : item.price;

  return (
    <div>
      <p>Item: {item.item}: ${price}</p>
    </div>
  );
};

export default Item;

