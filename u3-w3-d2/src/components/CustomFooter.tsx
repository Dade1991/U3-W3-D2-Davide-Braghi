import { Col, Container, Row } from "react-bootstrap"

const CustomFooter = () => {
  return (
    <Container fluid className="CustomFooter mt-5">
      <Row className="justify-content-center py-5">
        <Col className="text-center">
          <p className="m-0">
            All right reserved to EPICODE&#174; - {new Date().getFullYear()}
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default CustomFooter
