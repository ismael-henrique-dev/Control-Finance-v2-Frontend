import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 2rem auto;
  gap: 2rem;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 8rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

interface DefaultContainerProps {
  content: 'center' | 'start'
}

export const DefaultContainer = styled.div<DefaultContainerProps>`
  display: flex;
  width: 100%;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    & {
      margin: auto;
    }
  }
`

export const SummaryGridContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* auto-fit = preenche o espaço com o máximo de colunas possível */
  /* minmax = define tamanho mínimo e máximo para os cards */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`

export const EstatisticCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;

  h1 {
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    font-weight: 600;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.secundary};
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
    margin: auto;
  }
`

export const List = styled.div`
  display: grid;
  gap: 1.5rem;
  flex: 1;

  grid-template-columns: repeat(3, 1fr); // 3 colunas padrão

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // 2 colunas em telas médias
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr; // 1 coluna em telas pequenas
  }
`
