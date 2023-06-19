import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Components/auth-context';



createRoot(document.getElementById('root')).render(
 <AuthContextProvider>
 <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
);
