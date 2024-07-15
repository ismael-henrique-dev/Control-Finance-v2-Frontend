import { styled } from "styled-components";

export const ContainerSponsor = styled.div`
  text-align: center;
  width: 20rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 1.5rem;
  gap: 1rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.secundaryGray};
  color: ${(props) => props.theme.text};
`
