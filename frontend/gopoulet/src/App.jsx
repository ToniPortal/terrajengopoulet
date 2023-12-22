// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OrderComponent from './components/OrderComponent';
import Commande from './components/commande';
import RestaurateurComponent from './components/RestaurateurComponent';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<OrderComponent />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/restaurateur" element={<RestaurateurComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
