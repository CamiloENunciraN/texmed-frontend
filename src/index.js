import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DashBoard from './Pagina/DashBoard';
import Opcion from './Pagina/Opcion';
import ClientList from './Pagina/ClientList';
import ClientSearch from './Pagina/ClientSearch';
import ShowMedida from './Pagina/ShowMedida';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashBoard></DashBoard>
  </React.StrictMode>
);

reportWebVitals();
