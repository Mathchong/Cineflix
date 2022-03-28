import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Seat from './../Seat'
import Footer from './../Footer'
import Legendas from '../Legendas';

export default function Assentos() {
    const [assentos, setAssentos] = useState([]);
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [selecionados, setSelecionados] = useState([]);


    const responseFromAPI = assentos.length === 0 ? false : true
    const assentosDaSessao = assentos.length === 0 ? "" : assentos.seats


    const loading = `https://www.kaindl.com/fileadmin/_processed_/d/8/csm_2162_PE_Dekorbild_0ec3e17e00.jpg`

    const { idSessao } = useParams();
    const sessionSeats = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`

    const regexCPF = /^\d{11}$/m;

    useEffect(() => {
        const promise = axios.get(sessionSeats);
        promise.then((response) => {
            setAssentos(response.data)
            console.log(response.data)
            console.log(response.data.day.weekday)
            console.log(response.data.seats[0].id)
        })
    }, []);

    function sumbmitData(event) {
        event.preventDefault();
        if (!regexCPF.test(cpf)) {
            alert("O CPF somente deve conter numeros!")
            return;
        }
    }

    return (
        <AssentosPage>
            <h1>Selecione o(s) assento(s)</h1>
            <div className="assentos">
                {responseFromAPI ? (assentosDaSessao.map((assento) => {
                    return <Seat
                        key={assento.id}
                        id={assento.id}
                        name={assento.name}
                        isAvailable={assento.isAvailable}
                        callback={(id) => {
                           const returnedIndex = selecionados.indexOf(id)
                            if ( returnedIndex === -1) {
                                setSelecionados(selecionados.push(id))
                                console.log('adicionei um id')
                                console.log(selecionados)
                            }
                            else {
                                setSelecionados(selecionados.splice(returnedIndex, 1))
                                console.log('removi um id')
                            }
                            
                        }}
                    ></Seat>
                })) : <></>}
            </div>
            <Legendas />
            <form onSubmit={sumbmitData}>
                <label for='name'>Nome do comprador:</label>
                <input type='text' id='nameInput' placeholder='   Digite seu nome...' onChange={(event) => setNome(event.target.value)} required ></input>
                <label for='cpf'>CPF do comprador:</label>
                <input type='text' id='cpfInput' placeholder='   Digite seu CPF...' onChange={(event) => setCPF(event.target.value)} required></input>
                <div>
                    <button type='submit'>Reservar assento(s)</button>
                </div>
            </form>


            <Footer posterURL={responseFromAPI ? assentos.movie.posterURL : loading}
                title={responseFromAPI ? assentos.movie.title : ""}
                weekday={responseFromAPI ? assentos.day.weekday : ""}
                showtime={responseFromAPI ? assentos.name : ""}
            />
        </AssentosPage>
    )
}


const AssentosPage = styled.main`
    font-size: 24px;
    display:flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 100px;
        margin-bottom: 43px;
    }

    .assentos{
        display: flex;
        flex-wrap:wrap;
        width: 350px;
        justify-content: space-between;
    }
    
    form{
        width: 327px;
        display: flex;
        flex-direction: column;
    }

    label{
        font-size: 18px;
        margin-bottom: 3px;
    }

    input{
    height: 51px;
    width: 327px;
    border-radius: 3px;
    border: 1px solid #D4D4D4;
    margin-bottom: 10px;
    font-size: 20px;
    }
    
    input::placeholder{
    font-family: Roboto;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    }

    form div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    button{
        height: 42px;
        width: 225px;
        border-radius: 3px;
        background-color: #E8833A;
        color: #FFF;
        border: none;
        font-size: 18px;
    }

`