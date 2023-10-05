import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout/LayOut';

import { AppContainer } from './App.styled';

const ProductsList = lazy(() => import('./Pages/ListPage/ListPage'));
const Product = lazy(() => import('./Pages/ProductPage/ProductPage'));

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exect index element={<ProductsList />} />
          <Route path="/:id" element={<Product />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
