import { Route, Routes } from 'react-router'
import './App.css'
import Login from './authpages/Login'
import Register from './authpages/Register'
import Nav from './components/Nav'
import Background from './components/Background'

function App() {

  return (
    <>
    <Nav />
    <Background />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
