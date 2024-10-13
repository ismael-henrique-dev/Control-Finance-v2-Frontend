import { useState } from "react"
import { ChevronRight, Search, SearchCheck } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"
import { GlobalSearch } from "../../../../functions"
import {
  ContainerModal,
  InputAreaFunctional,
  ModalStyled,
  Suggestion,
  SuggestionArea,
} from "./styles"

interface SearchBarAreaProps {
  open: boolean
  setClose: (isOpen: boolean) => void
}

export function SearchBarArea({ open, setClose }: SearchBarAreaProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuery(value)
  }

  const { suggestions, isLoadingSearchResults } = GlobalSearch(query)

  const navigate = useNavigate()

  const handleClose = () => {
    setClose(false)
    setQuery("")
  }

  const handleClickAccount = (accountId: string) => {
    navigate(`/contas/${accountId}`)
    console.log(accountId)
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
    <ModalStyled open={open} onClose={handleClose}>
      <ContainerModal>
        <header>
          <InputAreaFunctional>
            <Search />
            <input
              type="search"
              placeholder="Pesquisar"
              value={query}
              onChange={handleSearch}
            />
          </InputAreaFunctional>

          <button onClick={handleClose}>cancelar</button>
        </header>
        {query ? (
          <main>
            {isLoadingSearchResults && "Carregando..."}
            {suggestions.transactions.length > 0 && (
              <SuggestionArea>
                <header>
                  <span>Transações</span>
                  <NavLink to="/transacoes">ver todos</NavLink>
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
                  <NavLink to="/contas">ver todos</NavLink>
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
                  <NavLink to="/metas">ver todos</NavLink>
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
          </main>
        ) : (
          <main>
            <p>Busque por algo</p>
          </main>
        )}
      </ContainerModal>
    </ModalStyled>
  )
}
