import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Seat(props) {
    const [backgroundColor, setBackgroundColor] = useState([]);
    const [borderColor, setBorderColor] = useState([]);
    const [selecionado, setSelecionado] = useState(false);

    const { name, isAvailable, id, callback } = props;

    useEffect(() => {
        if (isAvailable) {
            if (selecionado) {
                setBackgroundColor('#8DD7CF')
                setBorderColor('#1AAE9E')
            } else

            setBackgroundColor('#C3CFD9')
            setBorderColor('#808F9D')
        } else {
            setBackgroundColor('#FBE192')
            setBorderColor('#F7C52B')
        }
    }, [selecionado])


    const number = Number.parseFloat(name) / 10;
    console.log(isAvailable)

    return (

        <SeatIcon
            marginRight={number === Math.floor(number) ? 0 : 7}
            background={backgroundColor}
            border={borderColor}
            onClick={() => {
                if (isAvailable) {
                    callback(id)
                    setSelecionado(true);
                }
            }
            }
        >
            <p>{name}</p>
        </SeatIcon>
    )
}

const SeatIcon = styled.article`
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 11px;
    margin-bottom: 18px;
    border: 1px solid ${props => props.border};
    background-color: ${props => props.background};
    margin-right: ${props => props.marginRight}px;

`