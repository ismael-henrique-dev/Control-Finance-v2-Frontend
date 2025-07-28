import { getAccounts } from '@/services/http/account/GetAccounts'
import { useQuery } from '@tanstack/react-query'

export function AccountsList() {
  // 2. Use o hook useQuery
  const {
    data: accounts, // 'data' será a sua lista de contas quando a requisição for bem-sucedida
    isLoading, // 'isLoading' é true enquanto a requisição está em andamento
    isError, // 'isError' é true se a requisição falhar
    error, // 'error' contém o objeto de erro se 'isError' for true
  } = useQuery({
    queryKey: ['accounts'], // Uma chave única para sua query. Ajuda o React Query a armazenar em cache e invalidar dados.
    queryFn: getAccounts, // A função que realmente faz a requisição dos dados
  })

  if (isLoading) {
    return <div>Carregando contas...</div>
  }

  if (isError) {
    return <div>Erro ao carregar as contas: {error?.message}</div>
  }

  return (
    <div>
      <h1>Minhas Contas</h1>
      {accounts?.data.filteredAccounts &&
      accounts?.data.filteredAccounts.length > 0 ? (
        <ul>
          {accounts?.data.filteredAccounts.map(
            (
              account // Ajuste o tipo 'any' para a interface da sua conta
            ) => (
              <li key={account.id}>
                {account.title} - Saldo: R$ {account.value.toFixed(2)}
              </li>
            )
          )}
        </ul>
      ) : (
        <p>Nenhuma conta encontrada.</p>
      )}
    </div>
  )
}
