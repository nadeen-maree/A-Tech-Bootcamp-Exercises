import React from 'react';
import Item from './Item';

const Home = ({ store, shouldDiscount, changePage }) => {
  return (
    <div>
      <h2>Store</h2>
      {store.map((item, index) => (
        <Item key={index} item={item} shouldDiscount={shouldDiscount} />
      ))}
      <button onClick={() => changePage('Landing')}>Go to Landing</button>
    </div>
  );
};

export default Home;
