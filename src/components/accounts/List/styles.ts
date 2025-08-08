import styled from 'styled-components'

export const AccountsListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ul {
    display: grid;
    flex: 1;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 12px;
   
    li {
      list-style: none;
      max-width: 360px; 
    }
  }
`
