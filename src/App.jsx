import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Stores from './pages/Stores';
import Contact from './pages/Contact';
import Logo from "./components/Logo";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="stores" element={<Stores />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
