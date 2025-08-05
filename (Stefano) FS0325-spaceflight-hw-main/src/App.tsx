import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SpaceNavbar from './components/SpaceNavbar'
import Home from './components/Home'
import Details from './components/Details'

function App() {
  return (
    <BrowserRouter>
      <SpaceNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:articleId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
