import styled from 'styled-components';
import { useNavigate, Route } from 'react-router-dom';

export default function Sucesso(props) {
    const { info } = props;
    console.log(info);
    const navigate = useNavigate();

    return (
        <SucessoPage>
            <h1>Pedido feito <br /> com sucesso!</h1>
            <main>
                <div className="movie">
                    <h2>Filme e Sessão</h2>
                    <p>Nome do Filme</p>
                    <p>Data e hora do filme</p>
                </div>
                <div className="ingressos">
                    <h2>Ingressos</h2>
                    <p>Assento xx</p>
                    <p>Assento xx</p>
                </div>
                <div className="comprador">
                    <h2>Comprador</h2>
                    <p>Nome: </p>
                    <p>CPF: </p>
                </div>
            </main>
            <button onClick={() => navigate('/')}>Voltar para Home</button>
        </SucessoPage>
    )
}

const SucessoPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    main{
        width: 319px;
    }

    main div{
        margin-bottom: 30px;
    }

    h1{
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #247A6B;
        margin-bottom: 50px;
    }

    h2{
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: left;
        margin-bottom: 10px;
    }

    p{
        font-family: Roboto;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.04em;
        text-align: left;
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