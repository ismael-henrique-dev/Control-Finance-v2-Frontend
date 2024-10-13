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

export const PaginationButtonLeft = styled.button`
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const PaginationButtonRight = styled(PaginationButtonLeft)`
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`