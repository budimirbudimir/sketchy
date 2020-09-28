import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

interface ChartEntry {
  title: string
  value: number
  color: string
}

interface ColorChartsProps {
  byNumberOfLines: ChartEntry[]
  byNumberOfPoints: ChartEntry[]
}

const ColorCharts = ({ byNumberOfLines, byNumberOfPoints }: ColorChartsProps) => {
  return (
    <div className='charts'>
      <div className='chartContainer'>
        <PieChart data={byNumberOfLines} />
        By number of lines
      </div>
      <div className='chartContainer'>
        <PieChart data={byNumberOfPoints} />
        By number of points
      </div>
    </div>
  )
}

export default ColorCharts
