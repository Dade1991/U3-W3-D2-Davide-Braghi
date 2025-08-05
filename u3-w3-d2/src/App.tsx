import "./App.css"
import "./components/CustomNabar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/SingleArticle.css"
import "./components/NewsCollection.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomNavbar from "./components/CustomNavbar"
import NewsCollection from "./components/NewsCollection"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<NewsCollection />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
