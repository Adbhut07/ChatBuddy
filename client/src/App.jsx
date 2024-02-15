import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home'
import { Signup } from './pages/Signup/Signup'
import './App.css'

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Signup />
    </div>
  );
}

export default App
