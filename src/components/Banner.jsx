import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'


export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">
              Welcome to my Portfolio
            </span>
            <h1>
              {`Hi I'm Hugo Alvarez `}
              <span className="wrap">
                Web developer
              </span>
              <p>I'm a recent graduate from the university in Software Engineer.
              I like to learn new things. I'm very excited and. I hope to get a new job soon. Currently, I am improving my English. I go to an English school and. I'm learning how to speak and have a conversation better.
              </p>
              <button onClick={()=>console.log("Connected")}>Let's connect <ArrowRightCircle size={25}/></button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header IMG" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
