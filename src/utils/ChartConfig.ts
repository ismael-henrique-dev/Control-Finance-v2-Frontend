import { ApexOptions } from "apexcharts"
import { useTheme } from "styled-components"

const theme = useTheme()

export const options: ApexOptions = {
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
