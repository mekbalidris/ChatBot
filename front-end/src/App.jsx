import { Route, Routes } from 'react-router'
import './App.css'
import Login from './authpages/Login'
import Register from './authpages/Register'
import Nav from './components/Nav'
import Background from './components/Background'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Nav />
    <Background />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
