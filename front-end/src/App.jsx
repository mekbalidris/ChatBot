import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Log_in from './authpages/Log_in'
import Sign_up from './authpages/Sign_up'
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
        <Route path="/login" element={<Log_in />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path='/' element={<Home />} />
        <Route path='/chatpage' element={<ChatPage />} />
      </Routes>
    </>
  )
}

export default App
