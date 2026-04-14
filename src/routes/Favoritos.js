import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos, deleteFavoritos } from '../services/favoritos';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 120px 20px 60px;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="300" cy="700" r="80" fill="url(%23a)"/><circle cx="700" cy="800" r="120" fill="url(%23a)"/></svg>');
    pointer-events: none;
    z-index: 0;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 48px;
    text-align: center;
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 50px;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #EB9B00, #ff6b35);
        border-radius: 2px;
    }

    @media (max-width: 768px) {
        font-size: 36px;
        margin-bottom: 40px;
    }
`

const ResultadoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
`

const Resultado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 30px 25px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    text-align: center;

    &:hover {
        transform: translateY(-12px) scale(1.03);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
    }

    p {
        color: #FFF;
        font-weight: 600;
        font-size: 18px;
        margin: 15px 0 20px 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        font-family: 'Inter', sans-serif;
    }

    img {
        width: 120px;
        height: 180px;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    }

    &:hover img {
        transform: scale(1.05);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        padding: 25px 20px;

        p {
            font-size: 16px;
            margin: 12px 0 15px 0;
        }

        img {
            width: 100px;
            height: 150px;
        }
    }
`


function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function deletaFavorito(id, nome) {
    await deleteFavoritos(id)
    alert(`Livro ${nome} deletado com sucesso!`)
    fetchFavoritos()
  }

  useEffect( () => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <ContentWrapper>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              <Resultado
                onClick={() => deletaFavorito(favorito.id, favorito.nome)}
                key={favorito.id}>
                <img src={favorito.src} alt={favorito.nome}/>
                <p>{favorito.nome}</p>
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </ContentWrapper>
    </AppContainer>
  );
}

export default Favoritos;
