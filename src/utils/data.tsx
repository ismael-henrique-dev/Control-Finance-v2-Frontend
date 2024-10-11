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

export const selectCategoryData = [
  {
    Type: { typeName: "Saques", typeValue: "SAL" },
    categories: [
      { name: "Alimentação", type: "Alimentacao" },
      { name: "Educação", type: "Educacao" },
      { name: "Lazer", type: "Laser" },
      { name: "Saúde", type: "Saude" },
      { name: "Eletrônicos", type: "Eletronicos" },
      { name: "Compras", type: "Compras" },
      { name: "Beleza", type: "Beleza" },
      { name: "Veículo", type: "Veiculo" },
      { name: "Roupas", type: "Roupas" },
    ],
  },
  {
    Type: { typeName: "Depósitos", typeValue: "DEP" },
    categories: [
      { name: "Investimento", type: "Investimento" },
      { name: "Salário", type: "Salario" },
      { name: "Comissão", type: "Comissao" },
      { name: "Outro", type: "Outro" },
    ],
  },
]
