import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); // O uso do operador ! está indicando ao TypeScript que você tem certeza de que o valor retornado por document.getElementById('root') nunca será null. é importante ter certeza de que o elemento com o ID 'root' estará sempre presente no seu documento HTML.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);