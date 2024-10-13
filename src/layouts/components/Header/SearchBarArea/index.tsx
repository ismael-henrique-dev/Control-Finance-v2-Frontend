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
  handleClose: () => void
}

export function SearchBarArea({ open, handleClose }: SearchBarAreaProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuery(value)
  }

  const suggestions = GlobalSearch(query)

  const navigate = useNavigate()

  const handleClickAccount = (accountId: string) => {
    navigate(`/contas/${accountId}`)
    handleClose()
  }

  const handleClickTransaction = (transactionId: string) => {
    navigate(`/transacoes/${transactionId}`)
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
        <main>
          <SuggestionArea>
            <header>
              <span>Transações</span>
              <NavLink to="/route">ver mais</NavLink>
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
          <SuggestionArea>
            <header>
              <span>Contas</span>
              <NavLink to="/route">ver mais</NavLink>
            </header>
            <ul>
              {suggestions.accounts.slice(0, 5).map((account) => (
                <Suggestion
                  key={account.AcId}
                  onClick={() => handleClickAccount(account.AcId)}
                >
                  <div>
                    <span>
                      <SearchCheck />
                    </span>
                    {account.Name || account.accountTitle}
                  </div>
                  <ChevronRight />
                </Suggestion>
              ))}
            </ul>
          </SuggestionArea>
        </main>
      </ContainerModal>
    </ModalStyled>
  )
}
