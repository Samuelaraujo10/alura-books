import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"


const UltimosLancamentosContainer = styled.section`
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 80px 20px 60px;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(235, 155, 0, 0.3), transparent);
    }
`

const TituloSection = styled(Titulo)`
    margin-bottom: 40px;
    animation: slideDown 0.6s ease-out;
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

const NovosLivrosContainer = styled.div`
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 25px;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 15px;
        padding: 0 10px;
    }
`

const LivroCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    
    &:hover {
        transform: translateY(-12px);
    }
    
    &:hover div {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    }
`

const ImagemWrapper = styled.div`
    width: 180px;
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 12px;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
        width: 140px;
        height: 200px;
    }
`

const ImagemLivro = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    display: block;
`

const NomeLivro = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #002F52;
    text-align: center;
    margin: 0;
    line-height: 1.3;
    transition: color 0.3s ease;
    
    ${LivroCard}:hover & {
        color: #EB9B00;
    }
`

function UltimosLacamentos() {
    return (
        <UltimosLancamentosContainer>
            <TituloSection 
            cor='#EB9B00' 
            tamanhoFonte='36px' 
            >
                ÚLTIMOS LANÇAMENTOS
            </TituloSection>
            <NovosLivrosContainer>
            { livros.map(livro => (
                <LivroCard key={livro.id}>
                    <ImagemWrapper>
                        <ImagemLivro src={livro.src} alt={livro.nome} />
                    </ImagemWrapper>
                    <NomeLivro>{livro.nome}</NomeLivro>
                </LivroCard>
            ))}
        </NovosLivrosContainer>
        <CardRecomenda 
        titulo='Talvez você se interesse por...'
        tituloLivro={livros[0].nome}
        autor={livros[0].autor} 
        img={livros[0].src}
        />
        </UltimosLancamentosContainer>
    )

}

export default UltimosLacamentos