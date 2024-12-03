import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Cards from './Cards'
import Teacher from './Teacher'
import Admin from './Admin'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path= "/" element ={ <Home />} /> 
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/Cards" element={<Cards />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
