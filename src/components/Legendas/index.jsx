import styled from 'styled-components';

export default function Legendas() {
    return (
        <LegendasAssentos>
            <div className="selecionado">
                <div className="legenda"></div>
                <p>Selecionado</p>
            </div>
            <div className="disponivel">
                <div className="legenda"></div>
                <p>Disponivel</p>
            </div>
            <div className="indisponivel">
                <div className="legenda"></div>
                <p>Indisponivel</p>
            </div>
        </LegendasAssentos>
    )
}


const LegendasAssentos = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 41px;
    

    p{
        font-family: Roboto;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: -0.013em;
        text-align: left;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        margin-right: 15px;
    }
    .legenda {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #808F9D;
    background-color: #C3CFD9;
    }

    .selecionado div{
    border: 1px solid #45BDB0;
    background-color: #8DD7CF;
    }

    .indisponivel div{
    border: 1px solid #F7C52B;
    background-color: #FBE192;
    }
`