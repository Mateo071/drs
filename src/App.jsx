import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* Footer */}
    </>
  )
}

export default App
