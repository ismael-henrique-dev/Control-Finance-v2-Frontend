import styled from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    background-color: ${(props) => props.theme.primary};
    width: 4rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

interface Horiantacion {
  variant?: "Rotate" | "Normal"
}

export const PaginationButton = styled.button<Horiantacion>`
  width: 2.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.white};
  border: 0;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  cursor: pointer;

  transform: ${(props) =>
    props.variant === "Rotate" ? "rotate(180deg)" : "none"};
`;