import { ReactNode } from 'react'
import { StyledButton, Spinner } from './styles'
import { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  isLoading?: boolean
  iconOnly?: boolean
  size?: 'md' | 'sm'
}

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  iconLeft,
  iconRight,
  isLoading = false,
  disabled,
  iconOnly = false,
  size = 'md',
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || isLoading

  return (
    <StyledButton
      variant={variant}
      fullWidth={fullWidth}
      disabled={isDisabled}
      isLoading={isLoading}
      $iconOnly={iconOnly}
      size={size}
      {...rest}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {iconLeft && <span className="icon-left">{iconLeft}</span>}
          {children}
          {iconRight && <span className="icon-right">{iconRight}</span>}
        </>
      )}
    </StyledButton>
  )
}
