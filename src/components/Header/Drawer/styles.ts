import styled from "styled-components"
import Box from "@mui/material/Box"
import List from "@mui/material/List"

export const ContainerDrawer = styled(Box)`
  width: 20rem;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primaryGray};
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
    border-radius: 50%;
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }
`

export const ListContainer = styled(List)`
  
`
