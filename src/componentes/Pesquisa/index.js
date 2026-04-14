/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components'
import Input from '../Input'
import { useEffect, useState } from 'react'
import { getLivros } from '../../services/livros';
import { postFavoritos } from '../../services/favoritos';

const PesquisaContainer = styled.section`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #FFF;
    text-align: center;
    padding: 120px 20px 80px;
    min-height: 400px;
    width: 100%;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        opacity: 0.3;
        pointer-events: none;
    }

    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        animation: float 20s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
        50% { transform: translate(-50%, -50%) rotate(180deg); }
    }
`

// const ContentWrapper = styled.div`
//     max-width: 800px;
//     margin: 0 auto;
//     position: relative;
//     z-index: 2;
// `

const Titulo = styled.h2`
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    font-family: 'Playfair Display', serif;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    animation: fadeInUp 1s ease-out;

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        font-size: 36px;
    }
`

const Subtitulo = styled.h3`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 50px;
    font-family: 'Inter', sans-serif;
    opacity: 0.9;
    animation: fadeInUp 1s ease-out 0.2s both;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 40px;
    }
`

// const SearchWrapper = styled.div`
//     max-width: 600px;
//     margin: 0 auto;
//     animation: fadeInUp 1s ease-out 0.4s both;
// `

// const ResultadoContainer = styled.div`
//     margin-top: 40px;
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//     gap: 20px;
//     max-width: 800px;
//     margin-left: auto;
//     margin-right: auto;
// `

const Resultado = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
    }

    p {
        color: #FFF;
        font-weight: 600;
        font-size: 16px;
        margin: 0;
        flex: 1;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    img {
        width: 60px;
        height: 90px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin-left: 15px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 15px;

        img {
            margin-left: 0;
            width: 80px;
            height: 120px;
        }
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros ] = useState([])

    useEffect(() => {
       carregarLivros()
    }, [])

     async function carregarLivros() {
            try {
                const livrosDaAPI = await getLivros()
                setLivros(livrosDaAPI)
            } catch (erro) {
                console.error('Erro ao carregar livros:', erro)
                setLivros([])
            }
        }

     async function insereFavoritos(id, nome) {
        await postFavoritos(id)
        alert(`livro ${nome} inserido com sucesso`)
     }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Enconte seu livro em nossa estante.</Subtitulo>
            <Input  placeholder="Escreva sua próxima leitura" 
                    onBlur={evento => {
                        const textoDigitado = evento.target.value
                        const listaLivros = Array.isArray(livros) ? livros : []
                        const resultadoPesquisa = textoDigitado
                            ? listaLivros.filter(livro => livro.nome.includes(textoDigitado))
                            : []
                        setLivrosPesquisados(resultadoPesquisa)
                    }}
        />
        { livrosPesquisados.map(livro => (
            <Resultado onClick={() => insereFavoritos(livro.id, livro.nome)}>
                <p>{livro.nome}</p>
                <img src={livro.src}/>
            </Resultado>
             
        ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa