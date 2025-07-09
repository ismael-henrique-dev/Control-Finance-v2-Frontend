import { ReactNode, useState } from 'react'
import {
  Input,
  InputAdornment,
  InputLabel,
  InputProps,
  IconButton,
  FormHelperText,
} from '@mui/material'
import { Lock, LockOpen } from 'lucide-react'
import { FormControlContainer } from './styles'

interface TextFieldProps extends InputProps {
  id: string
  label: string
  error?: boolean
  helperText?: string
  variant?: 'text' | 'email' | 'password' | 'number'
  startAdornment?: ReactNode
}

export function TextField({
  id,
  label,
  error = false,
  helperText,
  variant = 'text',
  startAdornment,
  ...rest
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = variant === 'password'
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : variant

  return (
    <FormControlContainer variant='standard' fullWidth error={error}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        type={inputType}
        startAdornment={
          startAdornment && (
            <InputAdornment position='start'>{startAdornment}</InputAdornment>
          )
        }
        endAdornment={
          isPassword && (
            <InputAdornment position='end' style={{ marginBottom: 4 }}>
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <LockOpen /> : <Lock />}
              </IconButton>
            </InputAdornment>
          )
        }
        {...rest}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControlContainer>
  )
}
