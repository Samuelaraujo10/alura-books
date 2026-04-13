import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './routes/Home';
import Favoritos from './routes/Favoritos';

const GlobalStyle = createGlobalStyle`
html, body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  sans-serif;
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li {
    list-style: none;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/favoritos' element={<Favoritos/>} />
        <Route path='/' element={<Home />} />
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
