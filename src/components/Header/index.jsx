import React from 'react';
import styled from 'styled-components'

export default function Header(){
    return(
        <CineflixHeader>
            <h1>CINEFLIX</h1>
        </CineflixHeader>
    )
}


const CineflixHeader = styled.header`
    height: 67px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 34px;
        color: #E8833A;
        font-weight: 400;
    }
`