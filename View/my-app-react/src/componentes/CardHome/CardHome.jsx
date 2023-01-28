import React from 'react';
import {Container, Row, Col, Button, CardBody, CardTitle, Card, CardText} from 'reactstrap';
import style from '../CardHome/CardHome.module.css'

import imgProdutos from '../../assets/images/cardProdutos.jpg';
import imgEventos from '../../assets/images/cardEventos.jpg';
import imgReserva from '../../assets/images/cardReserva.jpg';
import imgContato from '../../assets/images/cardContato.jpg';

class CardHome extends React.Component{

    constructor(props){
        super(props)
        this.cards = [
            {
                nome:'Produtos',
                info:'Confira nossos produtos',
                img:imgProdutos
            },
            {
                nome:'Eventos',
                info:'Confira nossos próximos eventos',
                img:imgEventos
            },
            {
                nome:'Reserva',
                info:'Reserve a sua visita',
                img:imgReserva
            },
            {
                nome:'Contato',
                info:'Entre em contato conosco',
                img:imgContato
            }

        ]
        this.construindoCards=this.construindoCards.bind(this);

    }

    construindoCards (){
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
        return  <Container className={style.caixaCards} fluid>
            <Row className="my-5">
            {this.construindoCards()}
            </Row>

        </Container>
        }
    };


export default CardHome ;