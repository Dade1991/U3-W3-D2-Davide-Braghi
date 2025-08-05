import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./components/CustomNabar.css"
import "./components/SingleArticle.css"
import "./components/NewsCollection.css"
import "./components/CustomFooter.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomNavbar from "./components/CustomNavbar"
import CustomFooter from "./components/CustomFooter"
import NewsCollection from "./components/NewsCollection"
import ArticleDetails from "./components/ArticleDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<NewsCollection />}></Route>
          <Route path="/details" element={<ArticleDetails />}></Route>
          <Route
            path="*"
            element={
              <div className="text-center my-5 pb-5">
                <h2>404 - Not Found</h2>
                <p className="my-5">
                  Please return to{" "}
                  <a className="homepageLink" href="/">
                    MAIN PAGE
                  </a>
                </p>
              </div>
            }
          />
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </>
  )
}

export default App
