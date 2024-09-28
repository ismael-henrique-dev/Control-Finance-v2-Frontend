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

interface SearchBarAreaProps {
  open: boolean
  handleClose: () => void
}

export function SearchBarArea({ open, handleClose }: SearchBarAreaProps) {
  // const [suggestions, setSuggestions] = useState({
  //   actions: [],
  //   transactions: [],
  //   accounts: [],
  // })
  const suggestions = GlobalSearch()

  return (
    <ModalStyled open={open} onClose={handleClose}>
      <ContainerModal>
        <header>
          <InputAreaFunctional>
            <Search />
            <input type="search" placeholder="Pesquisar" />
          </InputAreaFunctional>

          <button onClick={handleClose}>cancelar</button>
        </header>
        <main>
          {/* Suggestions area */}
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
              {/* <Suggestion>
                <div>
                  <span>
                    <SearchCheck />
                  </span>
                  Novo carro
                </div>
                <ChevronRight />
              </Suggestion> */}
            </ul>
          </SuggestionArea>
          <SuggestionArea>
            <header>
              <span>Contas</span>
              <NavLink to="/route">ver mais</NavLink>
            </header>
            <ul>
              <Suggestion>
                <div>
                  <span>
                    <SearchCheck />
                  </span>
                  New cash
                </div>
                <ChevronRight />
              </Suggestion>
              <Suggestion>
                <div>
                  <span>
                    <SearchCheck />
                  </span>
                  National X
                </div>
                <ChevronRight />
              </Suggestion>
            </ul>
          </SuggestionArea>
        </main>
      </ContainerModal>
    </ModalStyled>
  )
}
