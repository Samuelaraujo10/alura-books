import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import  imagemLivro  from '../../imagens/livro2.png'


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
    cursor: pointer;
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
            { livros.map( livro => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={livro.src} />
        ))}
        </NovosLivrosContainer>
        <CardRecomenda 
        titulo='Talvez você se interesse por...'
        tituloLivro='A Evolução das Especies'
        autor='Charles Darwin' 
        img={imagemLivro}
        />
        </UltimosLancamentosContainer>
    )

}

export default UltimosLacamentos