import { useTheme } from "styled-components"
import { ChartContainer } from "./styles"
import { optionsFinancialIncomeChart } from "../../../utils/ChartConfig"
import ReactApexChart from "react-apexcharts"

interface Balance {
  total: number[]
}

const ColumnChart = ({
  balance,
  chartLabels,
}: {
  balance: Balance
  chartLabels: string[]
}) => {
  const theme = useTheme()

  const chartOptions = optionsFinancialIncomeChart(theme, chartLabels)

  const series = [
    {
      name: "Saldo neste período",
      data: balance.total,
    },
  ]

  return (
    <ChartContainer>
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="bar"
        height={394}
        width="834px"
      />
    </ChartContainer>
  )
}

export default ColumnChart
