import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 20px auto 0;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-between;
    width: 100%;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d68a00;
    }
`

const TituloLivro = styled.h3`
    max-width: 300px;
    margin: 10px 0;
    font-size: 20px;
    color: #002F52;
`

const Autor = styled.p`
    color: #002F52;
    font-size: 16px;
    margin: 5px 0 15px 0;
    font-weight: 500;
`

const ImgLivro = styled.img`
    width: 120px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
    gap: 15px;
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