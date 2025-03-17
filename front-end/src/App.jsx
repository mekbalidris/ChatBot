import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Login from './authpages/Login'
import Register from './authpages/Register'
import Nav from './components/Nav'
import HomeBackground from './components/HomeBackground'
import Home from './pages/Home'
import ChatPage from './pages/Chat'
import Background from './components/Background'

function App() {

  const location = useLocation();
  const isHome = location.pathname == '/'

  return (
    <>
      <Nav />
      {isHome ? <HomeBackground /> : <Background />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/chatpage' element={<ChatPage />} />
      </Routes>
    </>
  )
}

export default App
