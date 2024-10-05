import { useContext, useEffect, useState } from "react"
import { ChartContainer, Legend, LegendItem } from "./styles"
import { UserContext } from "../../../contexts/userContext"
import { options } from "../../../utils/ChartConfig"
import { useTheme } from "styled-components"
import Chart from "react-apexcharts"

interface ChartProps {
  chartType: "DEP" | "SAL"
}

export function DonutChart({ chartType }: ChartProps) {
  const { relativeCategoryStats } = useContext(UserContext)
  const [statics, setStatics] = useState<Record<string, number>>({})
  const [series, setSeries] = useState<number[]>([])
  const [labelsTitle, SetLabelsTitle] = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])

  const theme = useTheme()

  useEffect(() => {
    const roundedSeriesDep = Object.values(
      relativeCategoryStats.PercentageOfReturnByDep
    ).map((value) => parseFloat(value.toFixed(0)))

    const roundedSeriesSal = Object.values(
      relativeCategoryStats.PercentageOfReturnBySal
    ).map((value) => parseFloat(value.toFixed(0)))

    if (relativeCategoryStats) {
      if (chartType === "DEP") {
        setSeries(roundedSeriesDep)
        setStatics(relativeCategoryStats.PercentageOfReturnByDep)
        SetLabelsTitle(
          Object.keys(relativeCategoryStats.PercentageOfReturnByDep)
        )
        setColors([theme.blue1, theme.green, theme.blue2, theme.coral])
      } else {
        setSeries(roundedSeriesSal)
        setStatics(relativeCategoryStats.PercentageOfReturnBySal)
        SetLabelsTitle(
          Object.keys(relativeCategoryStats.PercentageOfReturnBySal)
        )
        setColors([
          theme.red,
          theme.blue1,
          theme.blue2,
          theme.secundary,
          theme.invertColor,
          theme.green,
          theme.coral,
          theme.pink,
          theme.yellow
        ])
      }
    }
  }, [relativeCategoryStats])

  const chartOptions = options(theme, labelsTitle, colors)

  return (
    <ChartContainer>
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
    </ChartContainer>
  )
}
