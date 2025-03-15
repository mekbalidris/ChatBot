import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Login from './authpages/Login'
import Register from './authpages/Register'
import Nav from './components/Nav'
import Background from './components/Background'
import Home from './pages/Home'
import ChatPage from './pages/Chat'
import ChatBaground from './components/chatBaground'

function App() {

  const location = useLocation();
  const isChat = location.pathname != '/'

  return (
    <>
      <Nav />
      {isChat ? <ChatBaground /> : <Background />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/chatPage' element={<ChatPage />} />
      </Routes>
    </>
  )
}

export default App
