import { Card, Button, Col } from 'react-bootstrap'
import type { Result } from '../types/Space'
import { useNavigate } from 'react-router-dom'

interface SingleNewsProps {
  article: Result
}

const SingleNews = ({
  article: { title, image_url, summary, id },
}: SingleNewsProps) => {
  const navigate = useNavigate()

  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="h-100">
        <Card.Img variant="top" src={image_url} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="flex-grow-1">{summary}</Card.Text>
          <Button variant="primary" onClick={() => navigate('/details/' + id)}>
            Vai ai dettagli
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleNews
