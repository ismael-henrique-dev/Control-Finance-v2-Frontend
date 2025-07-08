import styled from 'styled-components'
import { AvatarProps } from '.'

type AvatarContainerProps = AvatarProps

export const AvatarContainer = styled.div<AvatarContainerProps>`
  img {
    width: ${(props) => (props.variant === 'big' ? '6.5rem' : '1.5rem')};
    height: ${(props) => (props.variant === 'big' ? '6.5rem' : '1.5rem')};
    border-radius: 100%;
    object-fit: cover;
  }

  div {
    width: ${(props) => (props.variant === 'big' ? '7.5rem' : '1.5rem')};
    height: ${(props) => (props.variant === 'big' ? '7.5rem' : '1.5rem')};
    border-radius: 100%;
    background-color: ${(props) => props.theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => (props.variant === 'big' ? '24px' : '12px')};
    font-weight: 800;
  }
`
