import { ApexOptions } from "apexcharts"

export const options = (theme: any, chartLabels: string[], chartColors: string[]) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
      background: "transparent",
    },
    labels: chartLabels,
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
    colors: chartColors,
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    stroke: {
      show: false,
    },
  }

  return chartOptions
}
