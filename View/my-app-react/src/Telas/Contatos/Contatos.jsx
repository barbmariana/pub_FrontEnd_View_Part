import React from "react";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// reactstrap
import { Container, Row, Col } from "reactstrap";
//css
import style from './contatos.module.css';
//componentes

class Contatos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className={` p-5 justify-content-center ${style['box']}`} >
        <Row>
          <Col className={`col-md-6 p-3 justify-content-center ${style['contact-sections']} `}>
            <Row>
              <p className="h3 text-center" >Entre em contato</p>
            </Row>
            <form>
              <Row className="m-2">
                <Col className="col-6" >
                  <input className="form-control" type="text" placeholder="Nome" />
                </Col>
                <Col className="col-6" >
                  <input className="form-control" type="text" placeholder="Email" />
                </Col>
              </Row>
              <Container>
                <Row className="m-2 w-100">
                  <input className="form-control" type="text" placeholder="Assunto" />
                </Row>
              </Container>
              <Row className="m-2">
                <textarea className="form-control" rows="3" placeholder="Mensagem"></textarea>
              </Row>
              <Row className="justify-content-center" >
                <button className="btn btn-primary w-auto" type="submit">Enviar</button>
              </Row>
            </form>
          </Col>

          {/* redes sociais emails */}
          <Col className={`col-md-6 ${style['contact-sections']} `}>
            a
          </Col>
        </Row>

      </Container>
    )
  }


}

export default Contatos