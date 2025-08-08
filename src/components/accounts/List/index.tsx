import { AccountCard } from '@/components/ui'
import { AccountsListContainer } from './styles'

type AccountsListProps = {
  accounts: Account[]
  isLoading: boolean
  isError: boolean
  errorMessage?: string
}

export function AccountsList({
  accounts,
  isLoading,
  isError,
  errorMessage,
}: AccountsListProps) {
  if (isLoading) {
    return <p>Carregando contas...</p>
  }

  if (isError) {
    return <p>Erro ao carregar as contas: {errorMessage}</p>
  }

  console.log(accounts)

  return (
    <AccountsListContainer>
      {accounts.length > 0 ? (
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>
              <AccountCard
                id={account.id}
                resume={account.resume}
                value={account.value}
                title={account.title}
                type={account.type}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma conta encontrada.</p>
      )}
    </AccountsListContainer>
  )
}
