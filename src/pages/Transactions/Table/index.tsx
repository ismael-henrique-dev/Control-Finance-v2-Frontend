import { Banknote, MoreHorizontal, Wallet } from "lucide-react";
import { ContainerTable, MoreButton, TransactionsTable } from "./styles";

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
              <MoreButton>
                <MoreHorizontal />
              </MoreButton>
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
              <MoreButton>
                <MoreHorizontal />
              </MoreButton>
            </td>
          </tr>
        </tbody>
      </TransactionsTable>
    </ContainerTable>
  );
}
