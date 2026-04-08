import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLacamentos from '../componentes/UltimosLacamentos';

const HomeContainer = styled.div`
  
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Home() {
  return (
    <HomeContainer>
      <Pesquisa/>
      <UltimosLacamentos/>
    </HomeContainer>
  );
}

export default Home;
