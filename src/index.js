import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Settings from './components/pages/settings/settings';
import * as Icon from 'react-feather'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <App />}>
        <Route path = '/settings' element = { <Settings/>} />
        <Route
        index
        element={
          <main style={{ padding: "1rem", display: 'flex', flexDirection: 'column' }}>
            <p className='hidden text-lg font-medium text-vencru-darkgray lg:block'>Please Navigate to settings</p>
            <div className='block flex space-x-2 text-lg font-medium text-vencru-darkgray lg:hidden'>Please tap the nav Icon and navigate to settings<Icon.CornerRightUp /></div>
          </main>
        }
      />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
