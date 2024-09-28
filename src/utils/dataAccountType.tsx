import { Coins, Handshake, Landmark, Wallet } from "lucide-react"

export const selectAccountTypeData = [
  {
    name: "Carteira",
    type: "Carteira",
    icon: <Wallet />,
  },
  {
    name: "Conta Bancária",
    type: "ContaBancaria",
    icon: <Landmark />,
  },
  {
    name: "Poupança",
    type: "Poupanca",
    icon: <Coins />,
  },
  {
    name: "Corretora de investimentos",
    type: "CorretoraDeInvestimentos",
    icon: <Handshake />,
  },
]
