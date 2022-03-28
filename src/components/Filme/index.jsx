import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

export default function Filme(props) {
    const { posterURL, id } = props
    const movieSessions = `/sessoes/${id}`
    return (
        <Cartaz>
           <Link to={movieSessions}><img src={posterURL} alt="" /></Link>
        </Cartaz>
    )
}


const Cartaz = styled.article`
    
    width: 145px;
    height: 208px;
    background-color: #fff;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 11px;

    

    img{
        width: 129px;
        height: 193px;
    }
`