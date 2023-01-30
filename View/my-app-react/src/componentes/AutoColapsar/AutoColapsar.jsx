import React, {useEffect, useState} from 'react';
import css from './autoColapsar.module.css';
import { Container, Row, Col } from 'reactstrap';
import TabelaProdutos from '../TabelasProdutos/TabelasProdutos';
import api from '../../Api/Api';


export default function AutoColapsar () {
        const [tipos, setTipos] = useState();
        let categorias = [];
        let cards = [];
        let keys = [];

        useEffect(() => {
            api.get("categorias")
            .then((res) => setTipos(res.data))
            .catch((err) => console.log(err));
        }, []);
        

        {tipos?.map((tipo) => (
            categorias.push(tipo.nome)
        ))}

            
        for(let i = 0; i < categorias.length; i++) {
            switch(categorias[i]){
            case 'Whiskys':
                cards.push(
                    <Row className={`justify-content-center `}>
                        <Col xxl="6" xs="6"  className={`${css.slideRight} ${css.backgroud1} d-flex justify-content-center align-items-center mt-5`}>
                            <h1 className='tituloCard'>Wiskys</h1>                        
                        </Col>
                        <Col xxl="7" className={css.slideLeft}>
                            <TabelaProdutos>{categorias[i]}</TabelaProdutos>
                        </Col>
                    </Row>
                    );
                break;
            case 'Charutos':
                cards.push(
                    <Row className={`justify-content-center `}>
                        <Col xxl="6" xs="6" className={`${css.slideRight} ${css.backgroud3} d-flex justify-content-center align-items-center mt-5`}>
                            <h1 className='tituloCard'>Charutos</h1>                        
                        </Col>
                        <Col xxl="7" className={css.slideLeft}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                    );
                break;
            case 'Cigarros':
                cards.push(
                    <Row className={`justify-content-center `}>
	
                        <Col xxl="6" xs="6" className={`${css.slideRight} ${css.backgroud6} d-flex justify-content-center align-items-center mt-5`}>
                            <h1 className='tituloCard'>Cigarros</h1>                        
                        </Col>
                        <Col xxl="7" className={`${css.slideLeft} mb-5`}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                    );
                break;
            case 'Drinks':
                cards.push(
                    <Row className={`justify-content-center `}>
	
                        <Col xxl="6" xs="6" className={`${css.slideRight} ${css.backgroud5} d-flex justify-content-center align-items-center mt-5`}>
                            <h1 className='tituloCard'>Drinks</h1>                        
                        </Col>
                        <Col xxl="7" className={css.slideLeft}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                    );
                break;
            case 'Comidas':
                cards.push(
                    <Row className={`justify-content-center `}>
	
                        <Col xxl="6" xs="6" className={`${css.slideRight} ${css.backgroud2} d-flex justify-content-center align-items-center mt-5`}>
                            <h1 className='tituloCard'>Comidas</h1>                        
                        </Col>
                        <Col xxl="7" className={css.slideLeft}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                    );
                break;
            case 'OutrasBebidas':
                cards.push(
                    <Row className={`justify-content-center `}>
	
                        <Col xxl="6" xs="6" className={`${css.slideRight} ${css.backgroud4} d-flex justify-content-center align-items-center mt-5`}>
                            <h1 className='tituloCard'>Bebidas</h1>                        
                        </Col>
                        <Col xxl="7" className={css.slideLeft}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                    );
                break;
            default:
                console.log(`deu ruim`);
            }
        }
                    
        // console.log(cards);

        const app = (
            <Container className={css.containerAC} fluid>
                {cards}
            </Container>
        );
        
        return app;
}