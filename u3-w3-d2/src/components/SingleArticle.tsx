import { Col, Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import type Art from "../types/Art"

interface SingleArticleProps {
  articleToShow: Art
}

const SingleArticle = ({ articleToShow }: SingleArticleProps) => {
  return (
    <Col xs={12} md={4}>
      <Card className="articleCard">
        <div className="articleImgBox">
          <Card.Img
            className="articleImg"
            variant="top"
            src={articleToShow.image_url}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="flex-grow-1">
            <Card.Title className="articleTitle">
              {articleToShow.title}
            </Card.Title>
            <Card.Text className="clamp-text">
              {articleToShow.summary}
            </Card.Text>
            <Card.Text>
              {articleToShow.news_site} - Published:{" "}
              {articleToShow.published_at.slice(0, 10)}
            </Card.Text>
          </div>
          <div>
            <Button
              onClick={() => navigate(`/details/` + `${articleToShow.id}`)}
              className="articleButton"
            >
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleArticle
