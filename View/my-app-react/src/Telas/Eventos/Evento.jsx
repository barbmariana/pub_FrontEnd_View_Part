import React from 'react';

import BannerEventos from '../../componentes/BannerEventos/BannerEventos';
import EventosPagina from '../../componentes/EventosPagina/EventosPagina';
import style from '../Eventos/eventos.module.css'


class Eventos extends React.Component {

    render() {
        return (
              <div>
                <BannerEventos></BannerEventos>
                <h1 className={style.titulo}>Acompanhe os eventos do mês</h1>
                <EventosPagina></EventosPagina>
              </div>
        )
    }
}

export default Eventos;