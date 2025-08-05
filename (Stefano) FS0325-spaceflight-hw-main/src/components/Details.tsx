import { Container, Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import type { Result } from '../types/Space'
import { useEffect, useState } from 'react'

const Details = () => {
  // deve recuperare i propri dettagli dinamicamente dalla API
  // https://api.spaceflightnewsapi.net/v4/articles/:id

  const [article, setArticle] = useState<Result | null>(null)
  const { articleId } = useParams()
  // params.articleId

  const getDetails = () => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles/' + articleId)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nel recupero dettagli')
        }
      })
      .then((data: Result) => {
        setArticle(data)
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }

  useEffect(() => {
    getDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <h1 className="text-center">Dettagli</h1>
      <Row className="justify-content-center g-4">
        <Col xs={12} md={6}>
          {article && (
            <Card className="h-100">
              <Card.Img variant="top" src={article.image_url} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{article.title}</Card.Title>
                <Card.Text className="flex-grow-1">{article.summary}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Details
