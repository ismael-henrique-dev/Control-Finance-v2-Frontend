import { useState } from "react"
import { Transaction } from "../../../contexts/Transactions/transactions"
import { MenuOptionsTable } from "./MenuOptionsTable"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/pt-br"
import { priceFormatter } from "../../../utils/formatter"
import {
  Button,
  ContainerTable,
  NavContainer,
  TransactionsTable,
} from "./styles"
dayjs.extend(relativeTime)
dayjs.locale("pt-br")

interface TableProps {
  searchInput: string
  filteredTransactions: Transaction[]
}

export function Table({ searchInput, filteredTransactions }: TableProps) {
  const searchResultTransacions = filteredTransactions.filter((transaction) =>
    transaction.Title.toLowerCase().includes(searchInput.toLowerCase())
  )

  const [currentPage, setCurrentPage] = useState<number>(1)

  const totalTransactions = searchResultTransacions.length
  const totalPages = Math.ceil(totalTransactions / 10)
 const intervalOfTransactionsPage = Math.min(
   searchResultTransacions.length - (currentPage - 1) * 10,
   10
 )


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
                  <td>{priceFormatter(transaction.Value)}</td>
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
                  <Button
                    variant="nav"
                    onClick={handleFirstPage}
                    disabled={currentPage === 1}
                  >
                    <ChevronsLeft />
                  </Button>
                  <Button
                    variant="nav"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    variant="nav"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight />
                  </Button>
                  <Button
                    variant="nav"
                    onClick={handleLastPage}
                    disabled={currentPage === totalPages}
                  >
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
