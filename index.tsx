import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

// The application has been converted to pure HTML/CSS/JS.
// We only attempt to mount the React app if the #root element exists 
// (which it won't in the new pure HTML index.html).
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}