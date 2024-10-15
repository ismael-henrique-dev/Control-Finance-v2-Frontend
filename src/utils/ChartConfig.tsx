import { ApexOptions } from "apexcharts"

export const optionsHomeChart = (
  theme: any,
  chartLabels: string[],
  chartColors: string[]
) => {
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
          size: "50%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              color: theme.text,
              fontSize: "0.875rem",
              fontWeight: "600",
              formatter: function (w) {
                // Acessa o total e formata com duas casas decimais
                const total = w.globals.seriesTotals.reduce(
                  (a: number, b: number) => a + b,
                  0
                )
                return total.toFixed(2)
              },
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

export const optionsFinancialIncomeChart = (theme: any, chartLabels: string[]) => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
      background: theme.primaryGray,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 12,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: chartLabels,
      labels: {
        style: {
          colors: theme.text,
        },
      },
    },
    yaxis: {
      title: {
        text: "Em R$",
        style: {
          color: theme.text,
        },
      },
      labels: {
        style: {
          colors: theme.text,
        },
      },
    },
    fill: {
      opacity: 1,
      colors: [theme.primary, theme.secondary],
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return `R$ ${val.toFixed(2)}`
        },
      },
      theme: "dark",
    },
    grid: {
      borderColor: theme.text,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
          },
          plotOptions: {
            bar: {
              columnWidth: "75%",
            },
          },
        },
      },
    ],
  }

  return chartOptions
}