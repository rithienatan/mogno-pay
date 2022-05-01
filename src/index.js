import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Cashback from './components/menu/cashback/cashback';
import Store from './components/menu/store/store';
import Receipt from './components/menu/receipt/Receipt';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="up" element={<SignUp />} />
      <Route path="receipt" element={<Receipt />} />
      <Route path="store" element={<Store />} />
      <Route path="cashback" element={<Cashback />} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();