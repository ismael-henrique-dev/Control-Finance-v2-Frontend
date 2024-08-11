import React from "react"
import ReactApexChart from "react-apexcharts"
import styled from "styled-components"

const ChartContainer = styled.div`
  max-width: 854px;
  min-height: 444px;
  margin: auto;
  padding: 20px;
  background-color: #2b2b2b;
  border-radius: 12px;
  /* box-shadow: 0 4px 8px hsla(0, 0%, 0%, 0.1); */
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColumnChart: React.FC = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      
      toolbar: {
        show: false,
      },
      background: "#2b2b2b",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 12,
        borderRadiusApplication: "end"
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
          colors: "#fff",
          
        },
      },
    },
    yaxis: {
      title: {
        text: "Em R$",
        style: {
          color: "#fff",
        },
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    fill: {
      opacity: 1,
      colors: ["#6A5ACD", "#000"],
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
      borderColor: "#ffffff", // linhas atras
      
    },
  }

  const series = [
    {
      name: "Revenue",
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
