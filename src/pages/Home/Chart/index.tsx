import Chart from "react-apexcharts"
import { ApexOptions } from "apexcharts"
import { ChartContainer, Legend, LegendItem } from "./styles"
import { useTheme } from "styled-components"

export function DonutChart() {
  const theme = useTheme()
  const options: ApexOptions = {
    chart: {
      type: "donut",
      background: "transparent",
    },
    labels: ["Estudos", "Veiculo"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%", // Aumenta o tamanho da barra do gráfico de donut
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              color: theme.text, // Cor do texto "Total"
              fontSize: "0.875rem", // Tamanho da fonte do texto "Total"
              fontWeight: "600", // Peso da fonte do texto "T
              // Adicionando estilo diretamente ao valor total
            },
            value: {
              color: theme.text,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1f4e79", "#fdd835"],
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    stroke: {
      show: false,
    },
  }

  const series = [50, 50] // Exemplo de dados

  return (
    <ChartContainer>
      <Chart
        options={options}
        series={series}
        type="donut"
        width={220}
        height={220}
      />
      <Legend>
        <LegendItem color="#1f4e79">Estudos</LegendItem>
        <LegendItem color="#fdd835">Veiculo</LegendItem>
      </Legend>
    </ChartContainer>
  )
}
