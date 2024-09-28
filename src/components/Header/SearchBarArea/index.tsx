import { ChevronRight, Search, SearchCheck } from "lucide-react"
import {
  ContainerModal,
  InputAreaFunctional,
  ModalStyled,
  Suggestion,
  SuggestionArea,
} from "./styles"
import { NavLink } from "react-router-dom"
import { GlobalSearch } from "../../../utils/globalSeach"
import { useState } from "react"

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
              {suggestions.transactions.map((transaction) => (
                <Suggestion>
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
              {suggestions.accounts.map((account) => (
                <Suggestion>
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
