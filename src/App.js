import React from 'react';

import YandexMap from './components/yandex-map';
import TaxiOrderForm from './components/taxi-order-form';

import './App.css';

const App = () => (
  <div className='app-container'>
    <TaxiOrderForm />
    <YandexMap />
  </div>
);

export default App;
