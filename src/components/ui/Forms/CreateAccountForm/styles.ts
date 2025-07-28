// import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import styled from 'styled-components'
import { FormControl, Select as MuiSelect } from '@mui/material'

export const FormContainer = styled.form`
  width: 100%;
  text-align: start;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1.125rem;
  padding: 1rem;

  button {
    width: 100%;
    height: 48px;
  }
`

export const FormControlContainer = styled(FormControl)`
  /* width: 26rem; */
  /* align-items: center; */

  & .MuiInputLabel-root {
    /* width: 90%; */
    color: ${(props) => props.theme.primary}; // Cor do label padrão
    display: flex;
    /* align-items: center; */
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${(props) => props.theme.secundary}; // Cor do label quando focado
  }

  & .MuiInput-underline:before {
    border-bottom-width: 2px;
    border-bottom-color: ${(props) =>
      props.theme.primary}; // Cor da borda padrão
  }

  & .MuiInput-underline:hover:before {
    border-bottom-color: ${(props) =>
      props.theme.primary}; // Cor da borda quando o mouse passa sobre o campo
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${(props) =>
      props.theme.primary}; // Cor da borda quando o campo está focado
  }

  & .MuiInput-underline:hover {
    border-bottom-width: 3px;
    border-bottom-color: ${(props) =>
      props.theme.primary}; // Cor da borda quando o campo está focado
  }

  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: ${(props) =>
      props.theme.secundary}; // Cor da borda quando o mouse passa sobre o campo
  }

  svg {
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme.primary};
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    & {
      width: 17rem;
    }
  }
`

export const SelectCustom = styled(MuiSelect)`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;

  
`

// export const TransactionType = styled(ToggleButtonGroup)(({ theme }) => ({
//   display: 'grid',
//   gridTemplateColumns: 'repeat(2, 1fr)',
//   gap: '1rem',
//   marginTop: '0.5rem',
// }))

// type TransactionTypeButtonProps = {
//   varianttype: 'income' | 'outcome' // rename para evitar conflito com 'variant' do MUI
//   selected: boolean
// }

// export const TransactionTypeButton = styled(ToggleButton).withConfig({
//   shouldForwardProp: (prop) => prop !== 'varianttype' && prop !== 'selected',
// })<TransactionTypeButtonProps>(({ theme, varianttype, selected }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '1rem',
//   gap: '0.5rem',
//   borderRadius: '6px',
//   border: 0,
//   cursor: 'pointer',
//   backgroundColor: selected
//     ? varianttype === 'income'
//       ? theme.palette.success.main
//       : theme.palette.error.main
//     : theme.palette.grey[900],
//   color: selected ? theme.palette.common.white : theme.palette.grey[300],
//   '&:hover': {
//     backgroundColor: !selected && theme.palette.grey[700],
//     transition: 'background-color 0.2s',
//   },
//   '& svg': {
//     color: selected
//       ? theme.palette.common.white
//       : varianttype === 'income'
//       ? theme.palette.success.main
//       : theme.palette.error.main,
//   },
// }))
