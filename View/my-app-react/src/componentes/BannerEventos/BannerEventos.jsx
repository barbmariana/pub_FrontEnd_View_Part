import React from "react";
import {Container} from 'reactstrap';
import style from '../BannerEventos/BannerEventos.module.css'
import imagemBanner from '../../assets/images/eventoBanner.png'


class BannerEventos extends React.Component{

    constructor(props){
        super(props);
        this.imagem = props.imagem;
    }

    render(){
        return <Container fluid className={style.caixaBanner}>
            <div ><img src={imagemBanner}></img></div>
        </Container>
    }
    }


    export default BannerEventos