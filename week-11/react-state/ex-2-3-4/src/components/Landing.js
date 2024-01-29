import React from 'react';

const Landing = ({ user, hottestItem, changePage }) => {
  return (
    <div>
      <h2>Welcome, {user}</h2>
      
        <p>
          The hottest item is {hottestItem.item} for ${hottestItem.price}
        </p>
        <button onClick={() => changePage('Home')}>Go to Home</button>

    </div>
  );
};

export default Landing;
