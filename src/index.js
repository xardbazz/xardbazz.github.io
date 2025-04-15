import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const isIE = !!window.MSInputMethodContext || !!document.documentMode;
if (isIE) {
  root.render(
    <div style={{padding: "2rem", textAlign: "center"}}>
      <h2>Please use Chrome, Firefox, or Edge</h2>
      <p>This app doesn't support Internet Explorer</p>
    </div>
  );
} else {
  root.render(<App />);
}

// If you don't use web vitals, you can remove this line
reportWebVitals();