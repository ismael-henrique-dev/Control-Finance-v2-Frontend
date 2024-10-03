import { EmptyComponent } from "./styles"
import emptyIcon from "../../assets/empty-icon.svg"

interface EmptyTypeMensage {
  mensageType: "conta" | "transação" | "meta"
}

export function EmptyAccounts({mensageType}:EmptyTypeMensage) {
  return (
    <EmptyComponent>
      <img src={emptyIcon} alt="empty-icon-accounts" />
      <p>Ops! Você não tem nenhuma {mensageType} ainda.</p>
    </EmptyComponent>
  )
}