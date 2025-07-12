import { useState } from 'react'
import { ChevronRight, Search, SearchCheck, X } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GlobalSearch } from '../../../../functions'
import {
  CommandTrigger,
  ContainerModal,
  InputAreaFunctional,
  ModalStyled,
  NoResearch,
  Suggestion,
  SuggestionArea,
} from './styles'

type CommandMenuProps = {
  isOpen: boolean
  openCommandMenu: () => void
  closeCommandMenu: () => void
}

export function CommandMenu({
  isOpen,
  openCommandMenu,
  closeCommandMenu,
}: CommandMenuProps) {
  const [query, setQuery] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuery(value)
  }

  const { suggestions, isLoadingSearchResults } = GlobalSearch(query)

  const navigate = useNavigate()

  const handleClose = () => {
    closeCommandMenu()
    setQuery('')
  }

  const handleClickAccount = (accountId: string) => {
    navigate(`/contas/${accountId}`)
    handleClose()
  }

  const handleClickTransaction = (transactionId: string) => {
    navigate(`/transacoes/${transactionId}`)
    handleClose()
  }

  const handleClickGoal = (goalId: string) => {
    navigate(`/metas/${goalId}`)
    handleClose()
  }

  return (
    <>
      <CommandTrigger onClick={openCommandMenu}>
        <Search />
        <div>
          <span>Pesquisar</span>
        </div>
      </CommandTrigger>
      <ModalStyled open={isOpen} onClose={handleClose}>
        <ContainerModal>
          <div>
            <InputAreaFunctional>
              <Search />
              <input
                type='text'
                placeholder='Pesquisar'
                value={query}
                onChange={handleSearch}
              />
            </InputAreaFunctional>
            <button onClick={handleClose}>
              <X size={32} />
            </button>
          </div>
          {query ? (
            <main>
              {isLoadingSearchResults && <p>Carregando...</p>}
              {suggestions.transactions.length > 0 && (
                <SuggestionArea>
                  <header>
                    <span>Transações</span>
                    <NavLink to='/transacoes'>ver todos</NavLink>
                  </header>
                  <ul>
                    {suggestions.transactions.slice(0, 5).map((transaction) => (
                      <Suggestion
                        key={transaction.Id}
                        onClick={() => handleClickTransaction(transaction.Id)}
                      >
                        <div>
                          <span>
                            <SearchCheck />
                          </span>
                          {transaction.Title}
                        </div>
                        <ChevronRight />
                      </Suggestion>
                    ))}
                  </ul>
                </SuggestionArea>
              )}
              {suggestions.accounts.length > 0 && (
                <SuggestionArea>
                  <header>
                    <span>Contas</span>
                    <NavLink to='/contas'>ver todos</NavLink>
                  </header>
                  <ul>
                    {suggestions.accounts.slice(0, 5).map((account) => (
                      <Suggestion
                        key={account.Id}
                        onClick={() => handleClickAccount(account.Id)}
                      >
                        <div>
                          <span>
                            <SearchCheck />
                          </span>
                          {account.Name}
                        </div>
                        <ChevronRight />
                      </Suggestion>
                    ))}
                  </ul>
                </SuggestionArea>
              )}
              {suggestions.goals.length > 0 && (
                <SuggestionArea>
                  <header>
                    <span>Metas</span>
                    <NavLink to='/metas'>ver todos</NavLink>
                  </header>
                  <ul>
                    {suggestions.goals.slice(0, 5).map((goal) => (
                      <Suggestion
                        key={goal.Id}
                        onClick={() => handleClickGoal(goal.Id)}
                      >
                        <div>
                          <span>
                            <SearchCheck />
                          </span>
                          {goal.Title}
                        </div>
                        <ChevronRight />
                      </Suggestion>
                    ))}
                  </ul>
                </SuggestionArea>
              )}
              {!isLoadingSearchResults &&
                suggestions.transactions.length === 0 &&
                suggestions.accounts.length === 0 &&
                suggestions.goals.length === 0 && (
                  <p>Não há resultados para essa pesquisa.</p>
                )}
            </main>
          ) : (
            <NoResearch>
              <p>Busque por transações, metas ou contas.</p>
            </NoResearch>
          )}
        </ContainerModal>
      </ModalStyled>
    </>
  )
}
