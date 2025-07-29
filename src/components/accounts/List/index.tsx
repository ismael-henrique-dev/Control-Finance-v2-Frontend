import { deleteAccountById } from '@/services/http/account/DeleteAccount'
import { getErrorMessage } from '@/utils/GetErrorMessage'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

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
  const queryClient = useQueryClient()

  if (isLoading) {
    return <p>Carregando contas...</p>
  }

  if (isError) {
    return <p>Erro ao carregar as contas: {errorMessage}</p>
  }

  const handleDeleteAccount = async (id: string) => {
    try {
      await deleteAccountById(id)

      queryClient.invalidateQueries({ queryKey: ['accounts'] })

      toast.success('Conta deletada com êxito.')
    } catch (error) {
      const errorMessage = getErrorMessage(error)

      toast.error(errorMessage)
    }
  }

  return (
    <div>
      {accounts.length > 0 ? (
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>
              {account.title} - Saldo: R$ {account.value.toFixed(2)}
              <button onClick={() => handleDeleteAccount(account.id)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma conta encontrada.</p>
      )}
    </div>
  )
}
