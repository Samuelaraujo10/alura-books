import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 12px 20px;
    cursor: pointer;
    min-width: 120px;
    color: #002F52;
    transition: all 0.3s ease;
    border-radius: 6px;
    position: relative;

    &:hover {
        background-color: rgba(235, 155, 0, 0.1);
        color: #EB9B00;
        transform: translateY(-1px);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background-color: #EB9B00;
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }

    &:hover::after {
        width: 80%;
    }
`

const Opcoes = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 5px;

    @media (max-width: 768px) {
        display: none;
    }
`

const textoOpcoes = ['Categorias' , 'Favoritos', 'Estante']

function OpcoesHeader() {
    return (
        <Opcoes>
          { textoOpcoes.map( (texto) => (
             <Link to={`/${texto.toLowerCase()}`} key={texto} style={{ textDecoration: 'none' }}>
                <Opcao><p style={{ margin: 0 }}>{texto}</p></Opcao>
             </Link>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader