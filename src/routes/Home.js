import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589  165%);
  overflow: hidden;
`

function Home() {
  return (
    <HomeContainer>
      <Pesquisa/>
    </HomeContainer>
  );
}

export default Home;
