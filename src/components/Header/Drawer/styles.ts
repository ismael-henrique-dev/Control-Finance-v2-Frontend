import styled from "styled-components"
import Box from "@mui/material/Box"
import List from "@mui/material/List"

export const ContainerDrawer = styled(Box)`
  width: 20rem;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primaryGray};
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  overflow: hidden;
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
    color: ${(props) => props.theme.colors.secundary};
  }

  strong {
    color: ${(props) => props.theme.colors.text};
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
    color: ${(props) => props.theme.colors.secundary};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    font-weight: 500;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: start;
    flex: 1;
    padding: 0.5rem 0.75rem;
    gap: 0.75rem;

    &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      margin-top: 10%;

      a {
        color: ${(props) => props.theme.colors.secundary};
        font-size: 0.875rem;
      }
    }
  }
`
