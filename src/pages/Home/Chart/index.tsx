import { useContext, useEffect, useState } from "react"
import { ChartContainer, Legend, LegendItem } from "./styles"
import { UserContext } from "../../../contexts/User/userContext"
import { optionsHomeChart } from "../../../utils/ChartConfig"
import { useTheme } from "styled-components"
import Chart from "react-apexcharts"

interface ChartProps {
  chartType: "DEP" | "SAL"
}

export function DonutChart({ chartType }: ChartProps) {
  const { relativeCategoryStats, isLoadingStatic } = useContext(UserContext)
  const [statics, setStatics] = useState<Record<string, number>>({})
  const [series, setSeries] = useState<number[]>([])
  const [labelsTitle, setLabelsTitle] = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])

  const theme = useTheme()

  useEffect(() => {
    if (relativeCategoryStats) {
      const roundedSeriesDep = Object.values(
        relativeCategoryStats.PercentageOfReturnByDep
      )

      const roundedSeriesSal = Object.values(
        relativeCategoryStats.PercentageOfReturnBySal
      )

      if (chartType === "DEP") {
        setSeries(roundedSeriesDep)
        setStatics(relativeCategoryStats.PercentageOfReturnByDep)
        setLabelsTitle(
          Object.keys(relativeCategoryStats.PercentageOfReturnByDep)
        )
        setColors([theme.blue1, theme.green, theme.blue2, theme.coral])
      } else {
        setSeries(roundedSeriesSal)
        setStatics(relativeCategoryStats.PercentageOfReturnBySal)
        setLabelsTitle(
          Object.keys(relativeCategoryStats.PercentageOfReturnBySal)
        )
        setColors([
          theme.red,
          theme.blue1,
          theme.blue2,
          theme.secundary,
          theme.text,
          theme.green,
          theme.coral,
          theme.pink,
          theme.yellow,
        ])
      }
    }
  }, [relativeCategoryStats, chartType, theme])

  const chartOptions = optionsHomeChart(theme, labelsTitle, colors)
  const isSeriesEmpty = series.every((value) => value === null)

  return (
    <ChartContainer>
      {isLoadingStatic ? (
        <p>Carregando...</p>
      ) : isSeriesEmpty ? (
        <p>Não há resumo</p>
      ) : (
        <>
          <Chart
            options={chartOptions}
            series={series}
            type="donut"
            width={220}
            height={220}
          />
          <Legend>
            {Object.entries(statics)
              .slice(0, 5)
              .map(
                ([category, value], index) =>
                  value > 0 && (
                    <LegendItem color={colors[index]} key={category}>
                      <span>{category}</span>

                    </LegendItem>
                  )
              )}
          </Legend>
        </>
      )}
    </ChartContainer>
  )
}
