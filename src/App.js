import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sum from "./sum";
import MainContent from "./MainContent";
function App() {
  return (
    <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<MainContent />}/>          
                <Route path="/sum/:name/:summary" element={<Sum />} />
            </Routes>
          </BrowserRouter>
  );
}

export default App;
