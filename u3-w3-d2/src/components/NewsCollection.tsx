import { useState, useEffect } from "react"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import SingleArticle from "./SingleArticle"
import Art from "../types/Art"

const endPoint = "https://api.spaceflightnewsapi.net/v4/articles"

interface ApiResponse {
  results: Art[]
}

const NewsCollection = () => {
  const [articles, setArticles] = useState<Art[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticle()
  }, [])

  const getArticle = () => {
    fetch(endPoint)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`Error during API call`)
        }
      })
      .then((data: ApiResponse) => {
        console.log(`Extracted datas`, data.results)
        setIsLoading(false)
        setArticles(data.results)
      })
      .catch((err) => {
        console.log(`Error`, err)
        setIsLoading(false)
        alert(`Error`)
      })
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <h2 className="newsTitle text-center">
          Search all space related news here below
        </h2>
        <Col xs={12} md={6}></Col>
      </Row>
      <Row className="g-4">
        {isLoading ? (
          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center align-items-center ">
              <Spinner animation="border" variant="info" />
            </div>
          </Col>
        ) : (
          <>
            {articles.map((art) => {
              return <SingleArticle articleToShow={art} />
            })}
          </>
        )}
      </Row>
    </Container>
  )
}

export default NewsCollection
