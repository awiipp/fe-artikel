import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// config axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';
axios.defaults.headers['Accept'] = 'application/json';
axios.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('Token')}`;
  
  return config;
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>
);
