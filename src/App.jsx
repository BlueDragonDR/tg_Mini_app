
import './App.css';
import React from "react";//call the library
import FirstPage from "./pages/FirstPage";//page commponert
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
