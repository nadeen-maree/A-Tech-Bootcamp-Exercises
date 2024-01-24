import React, { useState } from 'react';
import Landing from './components/Landing';
import Home from './components/Home';

const App = () => {
  const [appState, setAppState] = useState({
    user: 'Robyn',
    store: [
      { item: 'XSPS Pro Player', price: 800, discount: 0.2, hottest: false },
      { item: 'Gizem Backwatch', price: 230, discount: 0.6, hottest: false },
      { item: 'Surround Sound Pelican', price: 3099, discount: 0.05, hottest: true },
    ],
    shouldDiscount: false,
    currentPage: 'Landing',
  });

  const changePage = (page) => {
    setAppState({ ...appState, currentPage: page });
  };

  return (
    <div>
      {appState.currentPage === 'Landing' ? (
        <Landing user={appState.user} hottestItem={appState.store.find(item => item.hottest)} changePage={changePage} />
      ) : (
        <Home store={appState.store} shouldDiscount={appState.shouldDiscount} changePage={changePage} />
      )}
    </div>
  );
};

export default App;
