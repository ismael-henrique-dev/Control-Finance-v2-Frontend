import styled, { css, keyframes } from 'styled-components'
import { ButtonVariant } from './index'

interface StyledProps {
  variant: ButtonVariant
  fullWidth?: boolean
  isLoading?: boolean
  $iconOnly?: boolean
  size?: 'md' | 'sm'
}

const sizes = {
  md: '3rem',
  sm: '2.5rem',
}

export const StyledButton = styled.button<StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.25rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;

  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease,
    transform 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${theme.primary};
          color: ${theme.text};
        `
      case 'secondary':
        return css`
          background: ${theme.secundaryGray};
          color: ${theme.text};
        `
      case 'danger':
        return css`
          background: ${theme.red};
          color: ${theme.white};
        `
      case 'ghost':
        return css`
          background: ${theme.text};
          color: ${theme.invertColor};
        `
    }
  }}

  ${({ theme, $iconOnly, size = 'md' }) =>
    $iconOnly &&
    css`
      padding: 0;
      width: ${sizes[size]};
      height: ${sizes[size]};
      border-radius: 50%;
      justify-content: center;
      font-size: 1.25rem;
      color: ${theme.white};

      .icon-left,
      .icon-right {
        margin: 0;
      }
    `}

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon-left,
  .icon-right {
    display: inline-flex;
  }
`

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const Spinner = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`
