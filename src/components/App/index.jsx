import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import Header from '../Header';
import Filmes from '../Filmes';
import Sessoes from '../Sessoes'
import Assentos from '../Assentos';
import Sucesso from '../Sucesso';

export default function App() {
    return (

        <Aplication>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Filmes />} />
                    <Route path='/sessoes/:idFilme' element={<Sessoes />} />
                    <Route path='/assentos/:idSessao' element={<Assentos />} />
                    <Route path='/sucesso' element={<Sucesso/>} />
                </Routes>
            </BrowserRouter>
        </Aplication>
    )
}


const Aplication = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 400;
box-sizing: border-box;
font-size: 32px;

Filmes, Assentos{
margin-top: 100px;
}


`