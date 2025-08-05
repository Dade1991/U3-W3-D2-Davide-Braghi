import { Container, Row } from 'react-bootstrap'
import SingleNews from './SingleNews'
import type { Result, SpaceResponse } from '../types/Space'
import { useEffect, useState } from 'react'

const Home = () => {
  // devo recuperare i dati per popolare l'homepage
  // e generare dinamicamente le SingleNews

  const [news, setNews] = useState<Result[]>([])

  const getNews = () => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nel recupero news')
        }
      })
      .then((data: SpaceResponse) => {
        setNews(data.results)
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <Container>
      <h1 className="text-center">Space Flight Blog</h1>
      <Row className="justify-content-center g-4">
        {news.map((article) => {
          return <SingleNews key={article.id} article={article} />
        })}
      </Row>
    </Container>
  )
}

export default Home
