import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLacamentos from '../componentes/UltimosLacamentos';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
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
  width: 100%;
`

function Home() {
  return (
    <HomeContainer>
      <ContentWrapper>
        <Pesquisa/>
        <UltimosLacamentos/>
      </ContentWrapper>
    </HomeContainer>
  );
}

export default Home;
