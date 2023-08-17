import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './components/cart/storage/Store';
import { FilterProvider } from './components/context/FilterContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <FilterProvider>
      <App />
    </FilterProvider>
  </Provider>
);
