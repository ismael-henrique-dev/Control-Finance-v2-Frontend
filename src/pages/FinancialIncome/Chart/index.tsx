import React from "react"
import ReactApexChart from "react-apexcharts"
import styled, { useTheme } from "styled-components"

const ChartContainer = styled.div`
  max-width: 854px;
  min-height: 444px;
  margin: auto;
  padding: 20px;
  background-color: ${(props) => props.theme.primaryGray};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColumnChart: React.FC = () => {
  const theme = useTheme()
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
        // endingShape: "rounded",
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
      categories: ["Mar 1-7", "Mar 8-14", "Mar 15-21", "Mar 22-28", "Final"],
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
      colors: [theme.primary, theme.secundary],
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
      borderColor: theme.text, // linhas atras
    },
  }

  const series = [
    {
      name: "Saldo neste periodo",
      data: [300, 400, 350, 600, 150],
    },
  ]

  return (
    <ChartContainer>
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="bar"
        height={394}
        width={824}
      />
    </ChartContainer>
  )
}

export default ColumnChart
