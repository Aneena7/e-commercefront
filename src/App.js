import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/signin.jsx';
import Login from './components/login.jsx';
import Nav from './components/aboutus.jsx';
export function App() {
  
    

    return(
      <>
      <Nav>

      </Nav>
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>

      </Routes>
    </BrowserRouter>
     </>
    )
}
export default App