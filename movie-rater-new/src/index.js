//import React, {useState, createContext} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './components/auth'; 
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

//export const TokenContext = createContext(null);

function Router(){

  //const TOKEN = "6a61b88bf2cb386261163134cc833c52514e5efc";
  //const [token, setToken] = useState('');

  return(
    
    <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/movies" element={<App />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router></Router>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
