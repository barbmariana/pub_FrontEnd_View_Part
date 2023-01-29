import React from 'react';
import '../Footer/footer.css'
import { Container } from 'reactstrap'
import imagLogo from '../../assets/images/logo.png'
import imgInsta from '../../assets/images/instagram.png';
import imgYou from '../../assets/images/youtube1.png';
import imgtt from '../../assets/images/twitter.png';
import imgwpp from '../../assets/images/whatsapp1.png';



class Footer extends React.Component {


    render() {
        return (
            <Container fluid className='footerTotal'>
                <div className='footer1'>
                    <img src={imagLogo} alt="Imagem do logo" />
                    <ul>
                        <a href="/"><li>Sobre Nós</li></a>
                        <a href="/produtos"><li>Produtos</li></a>
                        <a href="/eventos"><li>Eventos</li></a>
                        <a href="/contato"><li>Contato</li></a>
                        <a href="/reserva"><li>Reserva</li></a>
                        <a href="/administrador/private"><li>Administrador</li></a>
                    </ul>
                </div>
                <div className='footer2'>
                    <h3>Copyright © 2022 PubBlinders Inc. Todos os direitos reservados. PubBlinders Ltda. CNPJ: 00.111.1111./0000</h3>
                    <h3>Nossas Redes</h3>
                    <div className='footerImg'>
                        <img src={imgInsta} alt="Logo Instagram" />
                        <img src={imgYou} alt="Logo Youtube" />
                        <img src={imgtt} alt="Logo Twitter" />
                        <img src={imgwpp} alt="Logo Whatsapp" />
                    </div>
                </div>
            </Container>
        )
    }
}

export default Footer;