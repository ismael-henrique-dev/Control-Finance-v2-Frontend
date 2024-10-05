import { useState } from "react"
import { Transaction } from "../../../contexts/transactionsContext"
import { useFormatterCoin } from "../../../hooks/useFormatterCoin"
import { MenuOptionsTable } from "./MenuOptionsTable"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import {
  Button,
  ContainerTable,
  NavContainer,
  TransactionsTable,
} from "./styles"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/pt-br"
dayjs.extend(relativeTime)
dayjs.locale("pt-br")

interface TableProps {
  searchInput: string
  filteredTransactions: Transaction[]
}

export function Table({ searchInput, filteredTransactions }: TableProps) {
  const formatCurrency = useFormatterCoin

  const searchResultTransacions = filteredTransactions.filter((transaction) =>
    transaction.Title.toLowerCase().includes(searchInput.toLowerCase())
  )

  const [currentPage, setCurrentPage] = useState<number>(1)

  const totalTransactions = searchResultTransacions.length
  const totalPages = Math.ceil(totalTransactions / 10)
  const intervalOfTransactionsPage = Math.min(currentPage * 10, totalTransactions)

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function handleFirstPage() {
    setCurrentPage(1)
  }

  function handleLastPage() {
    setCurrentPage(totalPages)
  }

  return (
    <ContainerTable>
      <TransactionsTable>
        <thead>
          <tr>
            <th>Nome da transação</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Conta</th>
            <th>Categoria</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {searchResultTransacions
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((transaction) => {
              return (
                <tr key={transaction.Id}>
                  <td>{transaction.Title}</td>
                  <td>{formatCurrency(transaction.Value)}</td>
                  <td>{dayjs(transaction.CreatedAt).fromNow()}</td>
                  <td>{transaction.Type === "DEP" ? "Depósito" : "Saída"}</td>
                  <td>
                    <div className="icon-text">{transaction.AccountTitle}</div>
                  </td>
                  <td>
                    <div className="icon-text">{transaction.Categories}</div>
                  </td>
                  <td>
                    <MenuOptionsTable transactionId={transaction.Id} />
                  </td>
                </tr>
              )
            })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <span>
                Mostrando {intervalOfTransactionsPage} de {totalTransactions}{" "}
                transações
              </span>
            </td>
            <td colSpan={3}>
              <section>
                <span>
                  Página {currentPage} de {totalPages}
                </span>
                <NavContainer>
                  <Button variant="nav" onClick={handleFirstPage}>
                    <ChevronsLeft />
                  </Button>
                  <Button variant="nav" onClick={handlePrevPage}>
                    <ChevronLeft />
                  </Button>
                  <Button variant="nav" onClick={handleNextPage}>
                    <ChevronRight />
                  </Button>
                  <Button variant="nav" onClick={handleLastPage}>
                    <ChevronsRight />
                  </Button>
                </NavContainer>
              </section>
            </td>
          </tr>
        </tfoot>
      </TransactionsTable>
    </ContainerTable>
  )
}
