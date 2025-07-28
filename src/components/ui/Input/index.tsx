import { useState, useEffect } from 'react'
import { styled } from 'styled-components'

type InputProps = {
  label: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 16px;
  margin-bottom: 1.5rem;
`

const StyledLabel = styled.label<{ isFloating: boolean; hasError?: boolean }>`
  position: absolute;
  top: ${(props) => (props.isFloating ? '0px' : '24px')};
  left: 0;
  font-size: ${(props) => (props.isFloating ? '0.75rem' : '1rem')};
  color: ${(props) =>
    props.hasError ? props.theme.danger : props.theme.secundary};
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`

const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  font-size: 1rem;
  color: ${(props) => props.theme.secundary};
  background-color: transparent;
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.hasError ? props.theme.danger : props.theme.secundary)};
  padding: 4px 0;
  outline: none;

  &:focus {
    border-color: ${(props) =>
      props.hasError ? props.theme.danger : props.theme.primary};
  }
`

const ErrorMessage = styled.span`
  position: absolute;
  font-size: 0.75rem;
  color: ${(props) => props.theme.danger};
  margin-top: 2px;
  left: 0;
`

export function Input({ label, error, value, onChange, onFocus, onBlur, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const isFloating = isFocused || !!value

  return (
    <Wrapper>
      <StyledLabel isFloating={isFloating} hasError={!!error}>
        {label}
      </StyledLabel>
      <StyledInput
        {...rest}
        value={value}
        onChange={(e) => {
          onChange?.(e)
        }}
        onFocus={(e) => {
          setIsFocused(true)
          onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          onBlur?.(e)
        }}
        hasError={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  )
}
