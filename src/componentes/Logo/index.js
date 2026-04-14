import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 28px;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #002F52;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 10px 20px;
    border-radius: 8px;

    &:hover {
        background-color: rgba(235, 155, 0, 0.1);
        transform: scale(1.02);
    }
`

const LogoImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 12px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`

const LogoText = styled.p`
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    color: #002F52;

    strong {
        color: #EB9B00;
        font-weight: 700;
    }
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={ logo }
                alt='logo Alura Books'
                className='logo-img'
            />
            <LogoText><strong>Alura</strong>Books</LogoText>
        </LogoContainer>
    )
}

export default Logo