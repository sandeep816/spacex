import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path=":y" element={<App />} />
        {/* <Route path=":t" element={<App />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
)
