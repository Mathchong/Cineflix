import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';

import Sessao from '../Sessao';
import Footer from '../Footer'

export default function Sessoes() {
    const [sessoes, setSessoes] = useState([]);
    const sessionDays = sessoes.length === 0 ? "" : sessoes.days
    const { idFilme } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then((response) => {
            console.log(response.data);
            console.log(response.data.days);
            console.log(response.data.days[0].weekday);
            console.log(response.data.days[0].showtimes);
            console.log(response.data.posterURL);
            setSessoes(response.data)
        })

    }, []);

    return (
        <ListaDeSessoes>
            <h1>Selecione o horário</h1>
            {sessionDays === "" ? <></> : sessionDays.map((day) => <Sessao key={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes} />)}    
            <div className="margin"></div>
            <Footer posterURL={sessoes.posterURL} title={sessoes.title} weekday={sessoes.weekday} />
        </ListaDeSessoes>
    )
}

const ListaDeSessoes = styled.main`
    font-size: 24px;
    display:flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 110px;
        margin-bottom: 43px;
    }

    main{
        width: 329px;
    }

    .margin{
        margin-bottom: 115px;
    }


`