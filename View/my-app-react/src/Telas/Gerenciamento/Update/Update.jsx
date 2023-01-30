import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillBackspaceFill } from 'react-icons/bs'
import { Col, Container, Input, Row, Form, FormGroup } from 'reactstrap'
import Botao from '../../../componentes/Botao/Botao';
import style from './Update.module.css'

import axios from 'axios'


class Update extends React.Component {
    constructor() {
        super()

        this.arrayWhiskys = 7
        this.arrayComidas = 4
        this.arrayCharutos = 4
        this.arrayOutrasBebidas = 4
        this.arrayDrinks = 5
        this.arrayOutrasCigarros = 5
        this.arrayBody = []
        this.data
        this.state = {
            option: "Whiskys",
            id: null,
        }
        this.BuscarId = this.BuscarId.bind(this)
        this.changeOption = this.changeOption.bind(this)
        this.Verificacao = this.Verificacao.bind(this)
        this.Back = this.Back.bind(this)

    }
    changeOption(e) {
        this.arrayBody = []
        this.setState({ option: e.target.value })
    }

    BuscarId(id) {

        switch (this.state.option) {
            case "Whiskys":

                axios.get(`https://pubresiliajson.onrender.com/${this.state.option}/${id}`).
                    then((res) => {
                        this.data = res.data
                        document.getElementById(`${this.state.option}Nome`).value = this.data.Nome
                        document.getElementById(`${this.state.option}Idade`).value = this.data.Idade
                        document.getElementById(`${this.state.option}Origem`).value = this.data.Origem
                        document.getElementById(`${this.state.option}Foto`).value = this.data.Foto
                        document.getElementById(`${this.state.option}Preco`).value = this.data.Preço
                        document.getElementById(`${this.state.option}Tamanho`).value = this.data.Tamanho
                        document.getElementById(`${this.state.option}Estilo`).value = this.data.Estilo

                    }).catch((error) => {
                        alert(`Algo deu errado consult o adm master. \n ${error}`)
                    })

                break;

            case "Comidas":
                axios.get(`https://pubresiliajson.onrender.com/${this.state.option}/${id}`).
                    then((res) => {
                        this.data = res.data
                        document.getElementById(`${this.state.option}Nome`).value = this.data.Nome
                        document.getElementById(`${this.state.option}Sobre`).value = this.data.Sobre
                        document.getElementById(`${this.state.option}Preco`).value = this.data.Preço
                        document.getElementById(`${this.state.option}Foto`).value = this.data.Foto
                    }).catch((error) => {
                        alert(`Algo deu errado consult o adm master. \n ${error}`)
                    })

                break;

            case "Charutos":
                axios.get(`https://pubresiliajson.onrender.com/${this.state.option}/${id}`).
                    then((res) => {
                        this.data = res.data
                        document.getElementById(`${this.state.option}Nome`).value = this.data.Nome
                        document.getElementById(`${this.state.option}Origem`).value = this.data.Origem
                        document.getElementById(`${this.state.option}Força`).value = this.data.Força
                        document.getElementById(`${this.state.option}Preco`).value = this.data.Preço


                    }).catch((error) => {
                        alert(`Algo deu errado consult o adm master. \n ${error}`)
                    })

                break;

            case "Outras Bebidas":
                axios.get(`https://pubresiliajson.onrender.com/OutrasBebidas/${id}`).
                    then((res) => {
                        this.data = res.data
                        document.getElementById(`${this.state.option}Nome`).value = this.data.Nome
                        document.getElementById(`${this.state.option}Foto`).value = this.data.Foto
                        document.getElementById(`${this.state.option}Preco`).value = this.data.Preço
                        document.getElementById(`${this.state.option}Tamanho`).value = this.data.Tamanho

                    }).catch((error) => {
                        alert(`Algo deu errado consult o adm master. \n ${error}`)
                    })

                break;

            case "Drinks":

                axios.get(`https://pubresiliajson.onrender.com/${this.state.option}/${id}`).
                    then((res) => {
                        this.data = res.data
                        document.getElementById(`${this.state.option}name`).value = this.data.name
                        document.getElementById(`${this.state.option}unit`).value = this.data.unit
                        document.getElementById(`${this.state.option}description`).value = this.data.description
                        document.getElementById(`${this.state.option}amount`).value = this.data.amount
                        document.getElementById(`${this.state.option}price`).value = this.data.price

                    }).catch((error) => {
                        alert(`Algo deu errado consult o adm master. \n ${error}`)
                    })

                break;

            case "Cigarros":
                axios.get(`https://pubresiliajson.onrender.com/${this.state.option}/${id}`).
                    then((res) => {
                        this.data = res.data
                        document.getElementById(`${this.state.option}tipo`).value = this.data.tipo
                        document.getElementById(`${this.state.option}descricao`).value = this.data.descricao
                        document.getElementById(`${this.state.option}versao`).value = this.data.versao
                        document.getElementById(`${this.state.option}preco`).value = this.data.preco
                        document.getElementById(`${this.state.option}estoque`).value = this.data.estoque

                    }).catch((error) => {
                        alert(`Algo deu errado consult o adm master. \n ${error}`)
                    })

                break;

            default:
                alert("Algo deu errado")
                break;
        }

    }


    Verificacao() {
        if (this.state.option == "Whiskys" && this.arrayBody.length < this.arrayWhiskys) {
            alert("Click nos campos que dejesa deixar como estava")
        }
        else if (this.state.option == "Comidas" && this.arrayBody.length < this.arrayComidas) {
            alert("Click nos campos que dejesa deixar como estava")
        }
        else if (this.state.option == "Charutos" && this.arrayBody.length < this.arrayCharutos) {
            alert("Click nos campos que dejesa deixar como estava")
        }
        else if (this.state.option == "OutrasBebidas" && this.arrayBody.length < this.arrayOutrasBebidas) {
            alert("Click nos campos que dejesa deixar como estava")
        }
        else if (this.state.option == "Drinks" && this.arrayBody.length < this.arrayDrinks) {
            alert("Click nos campos que dejesa deixar como estava")
        }
        else if (this.state.option == "Cigarros" && this.arrayBody.length < this.arrayCigarros) {
            alert("Click nos campos que dejesa deixar como estava")
        }
        else {
            switch (this.state.option) {
                case "Whiskys":

                    axios.put(`https://pubresiliajson.onrender.com/${this.state.option}/${this.state.id}`, {
                        "Nome": this.arrayBody[0],
                        "Idade": this.arrayBody[1],
                        "Origem": this.arrayBody[2],
                        "Foto": this.arrayBody[3],
                        "Preço": this.arrayBody[4],
                        "Tamanho": this.arrayBody[5],
                        "Estilo": this.arrayBody[6]
                    }).then(() => {
                        alert("Whisky alterdo com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Comidas":
                    axios.put(`https://pubresiliajson.onrender.com/${this.state.option}/${this.state.id}`, {
                        "Nome": this.arrayBody[0],
                        "Sobre": this.arrayBody[1],
                        "Preço": this.arrayBody[2],
                        "Foto": this.arrayBody[3],
                    }).then(() => {
                        alert("Comida alterada com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Charutos":
                    axios.put(`https://pubresiliajson.onrender.com/${this.state.option}/${this.state.id}`, {
                        "Nome": this.arrayBody[0],
                        "Origem": this.arrayBody[1],
                        "Força": this.arrayBody[2],
                        "Preço": this.arrayBody[3]
                    }).then(() => {
                        alert("Charuto alterado com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Outras Bebidas":
                    axios.put(`https://pubresiliajson.onrender.com/OutrasBebidas/${this.state.id}`, {
                        "Nome": this.arrayBody[0],
                        "Foto": this.arrayBody[1],
                        "Preço": this.arrayBody[2],
                        "Tamanho": this.arrayBody[3]
                    }).then(() => {
                        alert("OutraBebida alterada com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Drinks":

                    axios.put(`https://pubresiliajson.onrender.com/${this.state.option}/${this.state.id}`, {
                        "name": this.arrayBody[0],
                        "unit": this.arrayBody[1],
                        "description": this.arrayBody[2],
                        "amount": this.arrayBody[3],
                        "price": this.arrayBody[4]
                    }).then(() => {
                        alert("Drink alterada com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Cigarros":
                    axios.put(`https://pubresiliajson.onrender.com/${this.state.option}/${this.state.id}`, {
                        "tipo": this.arrayBody[0],
                        "descricao": this.arrayBody[1],
                        "versao": this.arrayBody[2],
                        "preco": this.arrayBody[3],
                        "estoque": this.arrayBody[4]
                    }).then(() => {
                        alert("Cigarro alterado com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                default:
                    alert("Algo deu errado")
                    break;
            }
        }
    }
    Back() {
        setTimeout(() => {
            this.props.navigate("/administrador/private/gerenciamento/")
        }, 200)
    }

    render() {
        return (
            <Container fluid className={style.container}>
                <Row className='justify-content-start'>
                    <Col xxl={2} xs={2} className={`${style.colButtonBack} my-2`}>
                        <button onClick={this.Back}><BsFillBackspaceFill /></button>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col className={`${style.colH1} my-5`}>
                        <h1>Atualize o item</h1>
                    </Col>
                </Row>
                <Row >
                    <Col className='col-xxl-12'>
                        <Form className="was-validated">
                            <FormGroup>
                                <Row className='justify-content-center'>
                                    <Col xxl={4} md={6}>
                                        <Col xs={12} xxl={12} md={12}>
                                            <Input className={`${style.InputSelect} my-3`}
                                                type='select' name='select'
                                                onChange={this.changeOption}
                                            >
                                                <option>Whiskys</option>
                                                <option>Comidas</option>
                                                <option>Charutos</option>
                                                <option>Outras Bebidas</option>
                                                <option>Drinks</option>
                                                <option>Cigarros</option>
                                            </Input>
                                            {
                                                this.state.option == "Whiskys" &&
                                                <>
                                                    <Row className='align-items-center'>
                                                        <Col xxl={10}>
                                                            <Input required className={`${style.Input} my-3`} type="text" placeholder="Digite o 'id' de busca"
                                                                onChange={(e) => {
                                                                    this.setState({ id: e.target.value })
                                                                }}
                                                            >
                                                            </Input>
                                                        </Col>
                                                        <Col xxl={2}>
                                                            <Botao title="Buscar" bgColor="#18A078" color="#fff" onClick={() => {
                                                                this.BuscarId(this.state.id)
                                                            }} />
                                                        </Col>
                                                    </Row>
                                                    <Input id="WhiskysNome" required className={`${style.Input} my-3`} type="text" placeholder="Nome"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="WhiskysIdade" required className={`${style.Input} my-3`} type="text" placeholder="Idade"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="WhiskysOrigem" required className={`${style.Input} my-3`} type="text" placeholder="Origem"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="WhiskysFoto" required className={`${style.Input} my-3`} type="text" placeholder="Foto"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="WhiskysPreco" required className={`${style.Input} my-3`} type="number" placeholder="Preço"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[4] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="WhiskysTamanho" required className={`${style.Input} my-3`} type="text" placeholder="Tamanho"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[5] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="WhiskysEstilo" required className={`${style.Input} my-3`} type="text" placeholder="Estilo"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[6] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>

                                                ||

                                                this.state.option == "Comidas" &&
                                                <>
                                                    <Row className='align-items-center'>
                                                        <Col xxl={10}>
                                                            <Input required className={`${style.Input} my-3`} type="text" placeholder="Digite o 'id' de busca"
                                                                onChange={(e) => {
                                                                    this.setState({ id: e.target.value })
                                                                }}
                                                            >
                                                            </Input>
                                                        </Col>
                                                        <Col xxl={2}>
                                                            <Botao title="Buscar" bgColor="#18A078" color="#fff" onClick={() => {
                                                                this.BuscarId(this.state.id)
                                                            }} />
                                                        </Col>
                                                    </Row>
                                                    <Input id="ComidasNome" required className={`${style.Input} my-3`} type="text" placeholder="Nome"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="ComidasSobre" required className={`${style.Input} my-3`} type="text" placeholder="Sobre"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }
                                                        }}
                                                    >
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="ComidasPreco" required className={`${style.Input} my-3`} type="number" placeholder="Preço"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = parseFloat(e.target.value)

                                                            }
                                                            else {

                                                            }
                                                        }}
                                                    >
                                                    </Input>

                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="ComidasFoto" required className={`${style.Input} my-3`} type="text" placeholder="Foto"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = e.target.value

                                                            }
                                                            else {
                                                                this.setState({ inputValid: false })
                                                            }
                                                        }}
                                                    >

                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>

                                                ||

                                                this.state.option == "Charutos" &&
                                                <>
                                                    <Row className='align-items-center'>
                                                        <Col xxl={10}>
                                                            <Input required className={`${style.Input} my-3`} type="text" placeholder="Digite o 'id' de busca"
                                                                onChange={(e) => {
                                                                    this.setState({ id: e.target.value })
                                                                }}
                                                            >
                                                            </Input>
                                                        </Col>
                                                        <Col xxl={2}>
                                                            <Botao title="Buscar" bgColor="#18A078" color="#fff" onClick={() => {
                                                                this.BuscarId(this.state.id)
                                                            }} />
                                                        </Col>
                                                    </Row>
                                                    <Input id="CharutosNome" className={`${style.Input} my-3`} type="text" placeholder="Nome" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="CharutosOrigem" className={`${style.Input} my-3`} type="text" placeholder="Origem"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="CharutosForça" className={`${style.Input} my-3`} type="text" placeholder="Força"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="CharutosPreco" className={`${style.Input} my-3`} type="text" placeholder="Preço"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>
                                                ||

                                                this.state.option == "Outras Bebidas" &&
                                                <>
                                                    <Row className='align-items-center'>
                                                        <Col xxl={10}>
                                                            <Input required className={`${style.Input} my-3`} type="text" placeholder="Digite o 'id' de busca"
                                                                onChange={(e) => {
                                                                    this.setState({ id: e.target.value })
                                                                }}
                                                            >
                                                            </Input>
                                                        </Col>
                                                        <Col xxl={2}>
                                                            <Botao title="Buscar" bgColor="#18A078" color="#fff" onClick={() => {
                                                                this.BuscarId(this.state.id)
                                                            }} />
                                                        </Col>
                                                    </Row>
                                                    <Input id="Outras BebidasNome" className={`${style.Input} my-3`} type="text" placeholder="Nome"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Outras BebidasFoto" className={`${style.Input} my-3`} type="text" placeholder="Foto"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Outras BebidasPreco" className={`${style.Input} my-3`} type="number" placeholder="Preço"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Outras BebidasTamanho" className={`${style.Input} my-3`} type="text" placeholder="Tamanho"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>

                                                </>
                                                ||

                                                this.state.option == "Drinks" &&
                                                <>
                                                    <Row className='align-items-center'>
                                                        <Col xxl={10}>
                                                            <Input required className={`${style.Input} my-3`} type="text" placeholder="Digite o 'id' de busca"
                                                                onChange={(e) => {
                                                                    this.setState({ id: e.target.value })
                                                                }}
                                                            >
                                                            </Input>
                                                        </Col>
                                                        <Col xxl={2}>
                                                            <Botao title="Buscar" bgColor="#18A078" color="#fff" onClick={() => {
                                                                this.BuscarId(this.state.id)
                                                            }} />
                                                        </Col>
                                                    </Row>
                                                    <Input id="Drinksname" className={`${style.Input} my-3`} type="text" placeholder="Nome" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Drinksunit" className={`${style.Input} my-3`} type="text" placeholder="Unidade/s" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Drinksdescription" className={`${style.Input} my-3`} type="text" placeholder="Descrição" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Drinksamount" className={`${style.Input} my-3`} type="text" placeholder="Quantidade" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Drinksprice" className={`${style.Input} my-3`} type="text" placeholder="Preço" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[4] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>
                                                ||

                                                this.state.option == "Cigarros" &&
                                                <>
                                                    <Row className='align-items-center'>
                                                        <Col xxl={10}>
                                                            <Input required className={`${style.Input} my-3`} type="text" placeholder="Digite o 'id' de busca"
                                                                onChange={(e) => {
                                                                    this.setState({ id: e.target.value })
                                                                }}
                                                            >
                                                            </Input>
                                                        </Col>
                                                        <Col xxl={2}>
                                                            <Botao title="Buscar" bgColor="#18A078" color="#fff" onClick={() => {
                                                                this.BuscarId(this.state.id)
                                                            }} />
                                                        </Col>
                                                    </Row>
                                                    <Input id="Cigarrostipo" className={`${style.Input} my-3`} type="text" placeholder="Tipo" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Cigarrosdescricao" className={`${style.Input} my-3`} type="text" placeholder="Descrição" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Cigarrosversao" className={`${style.Input} my-3`} type="text" placeholder="Versão" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Cigarrospreco" className={`${style.Input} my-3`} type="text" placeholder="Preço" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input id="Cigarrosestoque" className={`${style.Input} my-3`} type="text" placeholder="Estoque" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[4] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>
                                            }

                                        </Col>
                                        <Col xs={12} xxl={12} className='my-5'>
                                            <Botao title="Confirmar" bgColor="#18A078" color="#fff" onClick={this.Verificacao} />
                                        </Col>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </Container >
        )
    }
}
export default function RouterUpdate() {
    let data;
    const navigate = useNavigate()
    return (
        <Update data navigate={navigate}></Update>
    )
}