import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './views';
import { Provider } from "react-redux";
import { ConfigureStore } from "./controller/store";
import services from "./services/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ConfigureStore(services)}>
    <App />
  </Provider>
);
