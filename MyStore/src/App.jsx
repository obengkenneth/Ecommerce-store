import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Home from './Pages/Home.jsx';
import Admin from './Pages/Admin.jsx';
import Footer from './Components/Footer.jsx'

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='admin' element={<Admin />} />
      </Route>
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}

