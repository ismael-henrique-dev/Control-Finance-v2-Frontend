import Modal from "@mui/material/Modal"
import { InputArea } from "../styles"
import { ChevronRight, Search, SearchCheck } from "lucide-react"
import { ContainerModal, Suggestion, SuggestionArea } from "./styles"
import { useState } from "react"
import { NavLink } from "react-router-dom"

interface SearchBarAreaProps {
  open: boolean
  handleClose: () => void
}

export function SearchBarArea({ open, handleClose }: SearchBarAreaProps) {
  const [suggestions, setSuggestions] = useState({
    actions: [],
    transactions: [],
    accounts: [],
  })

  return (
    <Modal open={open} onClose={handleClose}>
      <ContainerModal>
        <header>
          <InputArea>
            <Search />
            <input type="search" placeholder="Pesquisar" />
          </InputArea>
        </header>
        <main>
          {/* Suggestions area */}
          <SuggestionArea>
            <header>
              <span>Transações</span>
              <NavLink to="/route">ver mais</NavLink>
            </header>
            <ul>
              <Suggestion>
                <div>
                  <span>
                    <SearchCheck />
                  </span>
                  Novo carro
                </div>
                <ChevronRight />
              </Suggestion>
              <Suggestion>
                <div>
                  <span>
                    <SearchCheck />
                  </span>
                  Novo carro
                </div>
                <ChevronRight />
              </Suggestion>
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
    </Modal>
  )
}
