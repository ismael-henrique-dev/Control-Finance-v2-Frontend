import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.colors.primaryGray};
  width: 33.75rem;
  min-height: 20rem;
  padding: 1.25rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const SuggestionArea = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.colors.text}; //trocar para gray 3
      font-weight: 300;
      font-size: 0.875rem;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.secundary};
    }
  }

  ul {
    display: inline-flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const Suggestion = styled.li`
  background-color: ${(props) => props.theme.colors.secundaryGray};
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  flex: 1;

  svg {
    color: ${(props) => props.theme.colors.secundary};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    span {
      border-radius: 8px;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.colors.primaryGray};

      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`