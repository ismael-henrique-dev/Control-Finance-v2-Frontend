import {
  Activity,
  CircleCheckBig,
  Goal,
  HandCoins,
  ShoppingBasket,
} from "lucide-react"
import { CardStatusContainer, Status, StatusContainer } from "./styles"

export function CardStatus() {
  return (
    <CardStatusContainer>
      <p>
        O status com base nos seus gastos, aqui você pode saber como está a
        relação das suas finanças com metas, despesas e ganhos.
      </p>
      <StatusContainer>
        <Status>
          <div>
            <Goal />
            <span>Andamento das metas</span>
          </div>
          <CircleCheckBig />
        </Status>
        <Status>
          <div>
            <ShoppingBasket />
            <span>Gastos essenciais</span>
          </div>
          <CircleCheckBig />
        </Status>
        <Status>
          <div>
            <Activity />
            <span>Investidor</span>
          </div>
          <CircleCheckBig />
        </Status>
        <Status>
          <div>
            <HandCoins />
            <span>Economista</span>
          </div>
          <CircleCheckBig />
        </Status>
      </StatusContainer>
      <p>
        Recomendamos que você invista para preservar o valor do seu dinheiro e
        considere reduzir um pouco dos seus gastos.
      </p>
    </CardStatusContainer>
  )
}
