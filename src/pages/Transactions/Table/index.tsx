import {
  Banknote,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Wallet,
} from "lucide-react"
import {
  Button,
  ContainerTable,
  NavContainer,
  TransactionsTable,
} from "./styles"
import { MenuOptionsTable } from "./MenuOptionsTable"
import { useContext } from "react"
import { TransactionsContext } from "../../../contexts/transactionsContext"
import { useFormatterCoin } from "../../../hooks/useFormatterCoin"

export function Table() {
  const { transactions } = useContext(TransactionsContext)
  const formatCurrency = useFormatterCoin

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
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.Id}>
                <td>{transaction.Title}</td>
                <td>{formatCurrency(transaction.Value)}</td>
                <td>{transaction.CreatedAt}</td>
                <td>{transaction.Type}</td>
                <td>
                  <div className="icon-text">
                    <Wallet /> Carteira
                  </div>
                </td>
                <td>
                  <div className="icon-text">
                    <Banknote /> Salário
                  </div>
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
              <span>Mostrando 10 de 68 transações</span>
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
