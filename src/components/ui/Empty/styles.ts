import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  gap: 1.5rem;

  svg {
    width: 10rem;
    height: 10rem;
    color: ${(props) => props.theme.primary};
    stroke-width: 0.5;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;

    strong {
      font-weight: 500;
      font-size: 1.5rem;
      color: ${(props) => props.theme.text};
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme.text};
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 7.5rem;
      height: 7.5rem;
    }

    div {
      strong {
        font-size: 1.25rem;
      }
    }
  }
`
