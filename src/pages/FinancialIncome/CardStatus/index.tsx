import {
  Activity,
  Ban,
  CircleCheckBig,
  Globe,
  Goal,
  HandCoins,
  ShoppingBasket,
  TriangleAlert,
} from "lucide-react"
import { CardStatusContainer, Status, StatusContainer } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../../contexts/User/userContext"

const iconConfig = {
  Ok: <TriangleAlert color="#FFD600" />,
  Danger: <Ban color="#DC2626" />,
  Good: <CircleCheckBig color="#16A34A" />,
  Net: <Globe color="#0C4A6E" />,
}

export function CardStatus() {
  const { accountState } = useContext(UserContext)

  return (
    <CardStatusContainer>
      {accountState ? (
        <>
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
              {iconConfig[accountState.AndamentoDasMetas]}
            </Status>
            <Status>
              <div>
                <ShoppingBasket />
                <span>Gastos essenciais</span>
              </div>
              {iconConfig[accountState.GastosEssenciais]}
            </Status>
            <Status>
              <div>
                <Activity />
                <span>Investidor</span>
              </div>
              {iconConfig[accountState.Investimentos]}
            </Status>
            <Status>
              <div>
                <HandCoins />
                <span>Economista</span>
              </div>
              {iconConfig[accountState.Economista]}
            </Status>
          </StatusContainer>
          <p>
            Recomendamos que você invista para preservar o valor do seu dinheiro
            e considere reduzir um pouco dos seus gastos.
          </p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </CardStatusContainer>
  )
}
