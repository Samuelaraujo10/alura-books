import styled from 'styled-components'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const Icone = styled.li`
    margin-right: 0;
    width: 28px;
    height: 28px;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(235, 155, 0, 0.1);
        transform: scale(1.1);
    }

    img {
        width: 100%;
        height: 100%;
        filter: brightness(0.7);
        transition: filter 0.3s ease;
    }

    &:hover img {
        filter: brightness(1) sepia(1) hue-rotate(25deg) saturate(1.5);
    }
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
          { icones.map( (icone, index) => (
            <Icone key={index}>
                <img src={icone} alt={`ícone ${index === 0 ? 'perfil' : 'sacola'}`} />
            </Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader