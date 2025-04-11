
import './App.css';
import React from "react";
import FirstPage from "./pages/FirstPage";
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
