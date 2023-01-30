import React from "react";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// reactstrap
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
//css
import style from './estilo.module.css';
//componentes

class Reserva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      cliente: '',
      quantidadeDePessoas: 0,
      data: '',
      hora: '',
      numeroMesa: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateAmountOfPeople = this.validateAmountOfPeople.bind(this);
    this.validateDate = this.validateDate.bind(this);
    this.validateHour = this.validateHour.bind(this);

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = 'https://resiliamodulo3.onrender.com/Reserva';

    const reserva = {
      cliente: this.state.cliente,
      quantidadeDePessoas: this.state.quantidadeDePessoas,
      data: this.state.data,
      hora: this.state.hora,
      numeroMesa: this.state.numeroMesa
    };
    console.log(reserva);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserva),
    });

  }

  validateName({ target }) {
    const input = document.querySelector('.inputName');
    this.setState({ cliente: target.value }, () => {
      this.state.cliente.length > 3
        ? (input.classList.add('is-valid'), input.classList.remove('is-invalid'))
        : (input.classList.add('is-invalid'), input.classList.remove('is-valid'))
    })

  }

  validateAmountOfPeople({ target }) {
    const input = document.querySelector('.inputAmountOfPeople');
    this.setState({ quantidadeDePessoas: target.value }, () => {
      Number(this.state.quantidadeDePessoas) <= 0
        ? (input.classList.add('is-invalid'), input.classList.remove('is-valid'))
        : (input.classList.add('is-valid'), input.classList.remove('is-invalid'))
    })
  }

  validateDate({ target }) {
    const input = document.querySelector('.inputDate');
    this.setState({ data: target.value }, () => {
      this.state.data.length === 10
        ? (input.classList.add('is-valid'), input.classList.remove('is-invalid'))
        : (input.classList.add('is-invalid'), input.classList.remove('is-valid'))
    })
  }

  validateHour({ target }) {
    const input = document.querySelector('.inputHour');
    this.setState({ hora: target.value }, () => {
      this.state.hora.length === 5
        ? (input.classList.add('is-valid'), input.classList.remove('is-invalid'))
        : (input.classList.add('is-invalid'), input.classList.remove('is-valid'))
    })
  }

  render() {
    return (

      <Container fluid className={`p-3 justify-content-center ${style['box']}`} >
        <h1 className={`${style['title']}`} >Formulário de Reserva</h1>

        <Container className={`p-3 justify-content-center`} >

          <form className={`${style['box-form']}`} onSubmit={this.handleSubmit} >

            <Row className="m-2 p-3">
              {/* <label className="form-label">Nome:</label> */}
              <input
                placeholder="Nome:"
                autoCorrect="off"
                type="text"
                className="form-control inputName"
                onChange={this.validateName}
              />
            </Row>

            <Row className="m-2 p-3">
              {/* <label className="form-label">Quantidade de pessoas:</label> */}
              <input
                placeholder="Quantidade de pessoas:"
                type="number"
                className="form-control inputAmountOfPeople"
                onChange={this.validateAmountOfPeople}
              />
            </Row>

            <Container>
              <Row>
                <Col className="m-2 p-3" >
                  {/* <label className="form-label">Escolha a data:</label> */}
                  <input
                    onChange={this.validateDate}
                    type="date"
                    className="form-control inputDate"
                  />
                </Col>
                <Col className="m-2 p-3" >
                  {/* <label className="form-label">Escolha a hora:</label> */}
                  <input
                    type="time"
                    className="form-control inputHour"
                    onChange={this.validateHour}
                  />
                </Col>
              </Row>

            </Container>
            
            <Row className="m-2 p-3">
              <select
                onChange={({ target }) => this.setState({ numeroMesa: target.value })}
                className="form-select" >
                <option>Escolha uma mesa</option>
                <option value="1">Mesa n° 1</option>
                <option value="2">Mesa n° 2</option>
                <option value="3">Mesa n° 3</option>
                <option value="4">Mesa n° 4</option>
                <option value="5">Mesa n° 5</option>
              </select>
            </Row>

            <Row className="justify-content-center" >
              <button type="submit" className={`btn w-auto ${style['reserva-btn']}`}  >Reservar</button>
            </Row>

          </form>
        </Container>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Reserva realizada.</ModalHeader>
            <ModalBody>
              {`Reserva realizada para a data ${this.state.data} as ${this.state.hora} horas.`}
            </ModalBody>
          </Modal>
        </div>
      </Container>
    )
  }
}

export default Reserva
