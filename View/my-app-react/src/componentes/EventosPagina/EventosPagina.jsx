import React from "react";
import {Container, Row, Col, Button, CardTitle, Card, CardText} from 'reactstrap';
import style from '../EventosPagina/EventosPagina.module.css'
import imgKaraoke from '../../assets/images/eventoKaraoke.jpg'
import imgHappyHour from '../../assets/images/eventoDoseDupla.png'
import imgDj from '../../assets/images/eventoDj.jpg'
import imgDegustacao from '../../assets/images/eventoDegustacao.jpg'



class EventosPagina extends React.Component {

    constructor(props){
        super(props)

        this.cards = [
            {
                nome:'Karaokê',
                info:'Todas as quartas contamos com um divertido Karaokê',
                img:imgKaraoke
            },
            {
                nome:'Happy Hour',
                info:'Todas nossas bebidas com de desconto de seg a sex, das 17h às 20h',
                img:imgHappyHour
            },
            {
                nome:'Festa com DJ',
                info:'Nas sextas e sábados o DJ da casa aquece a pista',
                img:imgDj
            },
            {
                nome:'Degustação de Whisky',
                info:'Degustação dos melhores whiskys do mundo. Entre em contato para saber mais',
                img:imgDegustacao
            }

        ]

        this.construindoEventos = this.construindoEventos.bind(this);

    }


    construindoEventos() {
         return this.cards.map((card)=>{
            return (<Col className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex justify-content-center'><Card className={`${style.cardUnico} my-3 my-xl-0`} style={{width: '19rem'}}>
            <img alt={card.info} src={card.img}/>
            <CardTitle tag='h5'>{card.nome}</CardTitle>
            <CardText>{card.info}</CardText>
            <Button className={style.botaoCard}>Ver Mais</Button>
            </Card></Col>)
        })

    }

    render(){
        return <Container className={style.caixaCards} fluid>
            <Row className="my-5">
            {this.construindoEventos()}
            </Row>

        </Container>
        }
}



export default EventosPagina;