import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos, deleteFavoritos } from '../services/favoritos';
import imgFav1 from '../imagens/img-EntendendoAlg.jpg'
import imgFav2 from '../imagens/cleanCode.jpg'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`


const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`


const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
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
     <div>
       <Titulo>Aqui estão seus livros favoritos:</Titulo>
       <ResultadoContainer>
         {
           favoritos.length !== 0 ? favoritos.map(favorito => (
             <Resultado 
             onClick={() => deletaFavorito(favorito.id, favorito.nome)}
             key={favorito.id}>
               <p>{favorito.nome}</p>
               {favorito.id === "4" ? (
                 <img src={imgFav1} alt={favorito.nome}/>
               ) : (
                 <img src={imgFav2} alt={favorito.nome}/>
               )}
             </Resultado>
           )) : null
         }
       </ResultadoContainer>
     </div>
   </AppContainer>
  );
}

export default Favoritos;
