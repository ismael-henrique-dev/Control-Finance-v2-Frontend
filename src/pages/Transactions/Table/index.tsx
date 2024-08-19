import {
  Banknote,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Wallet,
} from "lucide-react"
import {
  Button,
  ContainerTable,
  NavContainer,
  TransactionsTable,
} from "./styles"
import { MenuOptionsTable } from "./MenuOptionsTable"

export function Table() {
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
          <tr>
            <td>Pagamento Mensal</td>
            <td>R$ 1200,00</td>
            <td>Há 2 meses</td>
            <td>Depósito</td>
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
              <Button variant="more">
                <MoreHorizontal />
              </Button>
            </td>
          </tr>
          <tr>
            <td>Pagamento Mensal</td>
            <td>R$ 1200,00</td>
            <td>Há 2 meses</td>
            <td>Depósito</td>
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
              <MenuOptionsTable />
            </td>
          </tr>
          <tr>
            <td>Pagamento Mensal</td>
            <td>R$ 1200,00</td>
            <td>Há 2 meses</td>
            <td>Depósito</td>
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
              <Button variant="more">
                <MoreHorizontal />
              </Button>
            </td>
          </tr>
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
