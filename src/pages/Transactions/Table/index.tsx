import { useContext } from "react"
import { TransactionsContext } from "../../../contexts/transactionsContext"
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
}

export function Table({ searchInput }: TableProps) {
  const { transactions } = useContext(TransactionsContext)
  const formatCurrency = useFormatterCoin

  const filteredTransaction = transactions.filter((transaction) =>
    transaction.Title.toLowerCase().includes(searchInput.toLowerCase())
  )

  const transactionsTotal = transactions.length

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
          {filteredTransaction.map((transaction) => {
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
              <span>Mostrando 10 de {transactionsTotal} transações</span>
            </td>
            <td colSpan={3}>
              <section>
                <span>Página 1 de 7</span>
                <NavContainer>
                  <Button variant="nav">
                    <ChevronsLeft />
                  </Button>
                  <Button variant="nav">
                    <ChevronLeft />
                  </Button>
                  <Button variant="nav">
                    <ChevronRight />
                  </Button>
                  <Button variant="nav">
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
