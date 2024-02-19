import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home'
import { Signup } from './pages/Signup/Signup'
import { Toaster } from "react-hot-toast";
import './App.css'
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} /> }/>
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />}/>
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App
