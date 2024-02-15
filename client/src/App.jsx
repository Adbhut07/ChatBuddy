import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
