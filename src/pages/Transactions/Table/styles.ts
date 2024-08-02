import styled from "styled-components";

export const ContainerTable = styled.div`
  width: 100%;
  max-width: 1214px;
  display: flex;
 
  
  /* margin: 4rem auto 0; */
  /* padding: 0 1.5rem; */
`;

export const TransactionsTable = styled.table`
  background-color: transparent;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  /* background-color: ${(props) => props.theme.primaryGray}; */
  font-size: 0.875rem;
  font-weight: 600;

  thead {
    tr {
      th {
        text-align: left;
        padding: 1.25rem 2rem;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.secundary};

        &:first-child {
          border-top-left-radius: 6px;
          width: 35%;
        }

        &:last-child {
          border-top-right-radius: 6px;
        }
      }
    }
  }

  tbody {
    tr {
      margin-top: 4px;
      background-color: ${(props) => props.theme.primaryGray};
      td {
        padding: 1.25rem 2rem;
        font-size: 0.875rem;
        font-weight: 400;
        color: ${(props) => props.theme.text};
        white-space: nowrap;

        .icon-text {
          display: flex;
          align-items: center;

          svg {
            margin-right: 0.5rem;
            width: 1.25rem;
            height: 1.25rem;
          }
        }

        &:first-child {
          border-top-left-radius: 6px;
          width: 35rem;
        }

        &:last-child {
          padding: 1.25rem 1rem;
        }
      }
    }
  }
`;

export const MoreButton = styled.button`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secundaryGray};
  border: none;
  color: ${(props) => props.theme.text};
  border-radius: 6px;
  padding: 6px;
  font-size: 1rem;
`;
