import {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Filme from './../Filme'


export default function Filmes() {
    const [filmes,setFilmes] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then((response) => {
            setFilmes(response.data)
            console.log(response.data)
        })
    }, []);
    
    
    return(
        <ListaDeFilmes>
            <h1>"Selecione o Filme"</h1>
            <main>
            {filmes.map((filme) => <Filme key={filme.id} id={filme.id} posterURL={filme.posterURL}/>)}
            </main>
            
        </ListaDeFilmes>
    )
}

const ListaDeFilmes = styled.div`
    font-size: 24px;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    h1{
        margin-top: 110px;
        margin-bottom: 43px;
    }

    main{
        
        display: flex;
        flex-wrap: wrap;
        width: 320px;
        justify-content: space-between;
        
    }
    
    article{
        width: 145px;
        height: 208px;
        background-color: #fff;
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    article img{
        width: 129px;
        height: 193px;
    }
`
