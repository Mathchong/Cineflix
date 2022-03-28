import styled from 'styled-components';

export default function Seat(props) {
    const { name, isAvailable, id, callback } = props;
    const number = Number.parseFloat(name) / 10;
    console.log(isAvailable)

    return (

        <SeatIcon
            marginRight={number === Math.floor(number) ? 0 : 7}
            background={isAvailable ? '#C3CFD9' : '#FBE192'}
            border={isAvailable ? '#808F9D' : '#F7C52B'}
            onClick={() => {
                if (!isAvailable) {
                    callback(id)

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