import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function Sessao(props) {
    const { weekday, date, showtimes } = props;
    return (
        <MovieSession>
            <h2>{weekday} - {date}</h2>
            <div>
                {showtimes.map(showtime => {
                    const sessionSeats = `/assentos/${showtime.id}`;
                     return <Link to={sessionSeats} key={showtime.id}><button >{showtime.name}</button></Link>
                })}
            </div>
        </MovieSession>
    )
}

const MovieSession = styled.article`
    width: 329px;

    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;

    button{
        background-color: #E8833A;
        color: #FFFFFF;
        font-size: 18px;
        margin: 30px 8px 30px 0px;
        border-radius: 3px;
        border: none;

        height: 43px;
        width: 83px;
    }
`