import React from "react";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// reactstrap
import { Container, Row, Col } from "reactstrap";
//css
import style from './contatos.module.css';
//componentes

class Contatos extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <Container fluid className={`${style['box']}`}>

        <Row className={`${style['contact-box']}`} >

          <Col className={`${style['form-box']}`} >
            <Row>
              <p className="h2" >Entre em contato</p>
            </Row>

            <Row>

              <form onSubmit={this.handleSubmit} >
                <Row>
                  <input required className={`form-control `} type="text" placeholder="Nome:" />
                </Row>
                <Row>
                  <input required className={`form-control `} type="email" placeholder="Email:" />
                </Row>
                <Row>
                  <input required className={`form-control `} type="text" placeholder="Assunto:" />
                </Row>
                <Row>
                  <textarea required className="form-control" rows="3" placeholder="Mensagem"></textarea>
                </Row>
                <Row className="justify-content-center" >
                  <button className={`btn ${style['contato-btn']} w-auto`}> Enviar</button>
                </Row>

              </form>

            </Row>

          </Col>

          <Col className={`${style['social-box']}`} >
            <Row><p className={`h2 ${style['h2']}`} >Outros meios</p></Row>

            <Col className={`${style['social-box-content']}`} >
              <Row className="m-2" >
                <p className={` ${style['secondary-title']}`} >Nosso email </p>
                <p className={`${style['info']}`}>shelby@pubblinders.com</p>
              </Row>

              <Row className={` m-2 text-center ${style['social-icons']}`} >
                <p className={` ${style['secondary-title']}`} >Conheça nossas redes sociais</p>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-whatsapp"></i>
              </Row>

              <Row className="m-2">
                <p className={` ${style['secondary-title']}`} >Nosso endereço</p>
                <p className={`${style['info']}`}>avenida bla bla bla</p>
              </Row>
            </Col>

          </Col>

        </Row>

      </Container>
    )
  }


}

export default Contatos