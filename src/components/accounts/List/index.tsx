type AccountsListProps = {
  accounts: Account[]
  isLoading: boolean
  isError: boolean
  errorMessage?: string
}

export function AccountsList({ accounts, isLoading, isError, errorMessage }: AccountsListProps) {
  if (isLoading) {
    return <p>Carregando contas...</p>
  }

  if (isError) {
    return <p>Erro ao carregar as contas: {errorMessage}</p>
  }

  // const handleDeleteAccount = () => {

  // }

  return (
    <div>
      {accounts.length > 0 ? (
        <ul>
          {accounts.map(account => (
            <li key={account.id}>
              {account.title} - Saldo: R$ {account.value.toFixed(2)}
              {/* <button onClick={}></button> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma conta encontrada.</p>
      )}
    </div>
  )
}
