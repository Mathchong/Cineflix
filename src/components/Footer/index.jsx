import styled from 'styled-components';


export default function Footer(props) {
    const { posterURL, title, weekday, showtime } = props;
    const altText = `${title} movie poster`


    return (
        <MovieFooter>
            <div className='poster'>
                <img src={posterURL} alt={altText} />
            </div>
            <h1 className='movieInfoFooter'>{title} <br /> {weekday === '' ? '' : weekday + '-' + showtime}</h1>
        </MovieFooter>

    )
}


const MovieFooter = styled.footer`
    height: 117px;
    background-color:#DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
    }

    .poster{
        width: 64px;
        height: 88px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFF;
        border-radius: 2px;
        box-shadow: 0px 2px 4px 0px #0000001A;
    }

    .poster img{
        height: 72px;
        width: 48px;
    }

    .movieInfoFooter{
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    margin: 0px 0px 0px 14px;
    color: #293845;
    }
`