import Chart from "react-apexcharts"
import { ApexOptions } from "apexcharts"
import { ChartContainer, Legend, LegendItem } from "./styles"

export function DonutChart() {
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
              color: "#8a9197", // Cor do texto "Total"
              fontSize: "0.875rem", // Tamanho da fonte do texto "Total"
              fontWeight: "600", // Peso da fonte do texto "T
              // Adicionando estilo diretamente ao valor total
            },
            value: {
              color: "#8a9197",
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
