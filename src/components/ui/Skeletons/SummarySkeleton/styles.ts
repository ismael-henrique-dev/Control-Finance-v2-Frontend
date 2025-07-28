import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`

export const SkeletonCard = styled.div`
  width: 12rem;
  height: 2.5rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme['gray-300'] ?? '#3a3a3a'};
  animation: ${pulse} 1.5s ease-in-out infinite;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 1rem;
  box-sizing: border-box;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 0.75rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-400'] ?? '#555'};
    animation: ${pulse} 1.5s ease-in-out infinite;
  }

  &::before {
    width: 80%;
  }

  &::after {
    width: 60%;
  }
`
