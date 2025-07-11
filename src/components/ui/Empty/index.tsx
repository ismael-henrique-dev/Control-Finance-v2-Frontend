import { ArrowLeftRight, Goal, Wallet } from 'lucide-react'
import { Container } from './styles'
import { Button } from '../Button'

type EmptyProps = {
  type: 'account' | 'transaction' | 'goal'
  title: string
  description: string
  onCreateClick?: () => void
}

export function Empty({ type, title, description, onCreateClick }: EmptyProps) {
  return (
    <Container>
      {type === 'account' && <Wallet />}
      {type === 'transaction' && <ArrowLeftRight />}
      {type === 'goal' && <Goal />}
      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      <Button
        variant='primary'
        style={{ width: '7rem' }}
        onClick={onCreateClick}
      >
        Crie uma
      </Button>
    </Container>
  )
}
