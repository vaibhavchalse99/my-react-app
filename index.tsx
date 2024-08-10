import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);