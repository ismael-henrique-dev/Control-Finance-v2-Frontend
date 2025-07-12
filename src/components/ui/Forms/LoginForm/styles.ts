import styled from 'styled-components'

export const LoginContainer = styled.div`
  /* width: 20rem; */
  width: 100%;
  text-align: start;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1.125rem; /* 18px */

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;

    p {
      margin-top: 0.5rem;
      font-size: 0.75rem;
      color: ${(props) => props.theme.red};
      font-weight: 400;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
    font-weight: 400;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1.125rem; /* 18px */
    width: 100%;
  }

  span {
    color: ${(props) => props.theme.text};
    gap: 0.25rem;
  }
`


