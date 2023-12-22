import { Routes, Route } from "react-router-dom"
import Info from './pages/Info'
import Home from './pages/Home'
import Game from './pages/Game'
import Header from "./header/Header"
import Footer from "./footer/Footer"
import './App.css'

const App = () => {
  return (
    <div className="fullscreen">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
