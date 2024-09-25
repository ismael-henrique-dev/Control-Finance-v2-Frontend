import styled from "styled-components"
import Box from "@mui/material/Box"
import List from "@mui/material/List"

export const ContainerDrawer = styled(Box)`
  width: 20rem;
  height: 100vh;
  background-color: ${(props) => props.theme.primaryGray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem 3rem;
  overflow: hidden;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: ${(props) => props.theme.secundary};
    background-color: transparent;
    border: 0;
    cursor: pointer;

    span {
      font-size: 0.875rem;
    }
  }
`

export const PresentationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 2rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 100%;
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.secundary};
  }

  strong {
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
  }
`

export const ListContainer = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme.secundary};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-weight: 500;
  }

  &:last-child {

  }

 

  li {
    display: flex;
    align-items: center;
    justify-content: start;
    flex: 1;
    padding: 0.5rem 0.75rem;
    gap: 0.75rem;

    /* &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      margin-top: 10%;

      a {
        color: ${(props) => props.theme.secundary};
        font-size: 0.875rem;
      }
    } */
  }
`
