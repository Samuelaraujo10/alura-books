import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import  imagemLivro  from '../../imagens/livro-orige.jpg'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`

const ImagemLivro = styled.img`
    width: 120%;
    max-width: 200px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
`

function UltimosLacamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor='#EB9B00' 
            tamanhoFonte='36px' 
            // alinhamento='center' | caso queira um alinhamento diferente do padrão |
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
            { livros.map(livro => (
                <ImagemLivro key={livro.id} src={livro.src} alt={livro.nome} />
            ))}
        </NovosLivrosContainer>
        <CardRecomenda 
        titulo='Talvez você se interesse por...'
        tituloLivro='A Origem das Espécies'
        autor='Charles Darwin' 
        img={imagemLivro}
        />
        </UltimosLancamentosContainer>
    )

}

export default UltimosLacamentos