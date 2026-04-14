import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    align-items: center;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display: flex;
    margin: 40px auto;
    max-width: 750px;
    padding: 40px 35px;
    justify-content: space-between;
    width: 95%;
    gap: 35px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid rgba(255, 255, 255, 0.8);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #EB9B00, #ff6b35);
        border-radius: 20px 20px 0 0;
    }

    &:hover {
        box-shadow: 0 30px 60px rgba(235, 155, 0, 0.15);
        transform: translateY(-10px) scale(1.02);
        background: linear-gradient(135deg, #ffffff 0%, #f0f2f5 100%);
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 25px;
        padding: 30px 25px;
        margin: 30px auto;
    }
`

const Botao = styled.button`
    background: linear-gradient(135deg, #EB9B00 0%, #ff6b35 100%);
    color: #FFF;
    padding: 16px 32px;
    font-size: 16px;
    border: none;
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    &:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 15px 30px rgba(235, 155, 0, 0.4);
        background: linear-gradient(135deg, #ff6b35 0%, #EB9B00 100%);

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(-1px) scale(1.02);
    }
`

const TituloLivro = styled.h3`
    max-width: 300px;
    margin: 15px 0;
    font-size: 24px;
    color: #002F52;
    font-weight: 700;
    line-height: 1.3;
`

const Autor = styled.p`
    color: #666;
    font-size: 16px;
    margin: 10px 0 20px 0;
    font-weight: 500;
`

const ImgLivro = styled.img`
    width: 140px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    
    ${Card}:hover & {
        transform: scale(1.05) rotate(-2deg);
        box-shadow: 0px 12px 24px rgba(235, 155, 0, 0.2);
    }

    @media (max-width: 768px) {
        width: 120px;
    }
`

const ConteudoTexto = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ConteudoImagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
`

function CardRecomenda({titulo, tituloLivro, autor, img}) {
    return (
        <Card>
            <ConteudoTexto>
                <Titulo tamnhoFonte='16px' cor='#EB9B00' alinhamento='left'> {titulo} </Titulo>
                <TituloLivro>{tituloLivro}</TituloLivro>
                <Autor>{autor}</Autor>
            </ConteudoTexto>
            <ConteudoImagem>
                <ImgLivro src={img} alt={tituloLivro} />
                <Botao>Saiba mais</Botao>
            </ConteudoImagem>
        </Card>
    )
}

export default CardRecomenda