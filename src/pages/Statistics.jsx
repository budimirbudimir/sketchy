import React from 'react'
import { useSelector } from 'react-redux'

import { Statlines, ColorCharts, ColorGroups } from '../components/stats'
import { selectSaveData } from '../store/appSlice'

import '../components/stats/Stats.css'
import './Statistics.css'

export const Statistics = () => {
  const saveData = useSelector(selectSaveData)

  // Data derivates, memoization candidates
  const totalPointsReducer = (acc, curr) => acc + curr.points.length
  const uniqueColorsReducer = (acc, curr) => acc.indexOf(curr) === -1 ? [...acc, curr] : acc
  const colors = saveData && saveData.lines ? saveData.lines.map(curr => curr.brushColor) : []
  const points = saveData && saveData.lines ? saveData.lines.reduce(totalPointsReducer, 0) : []
  const uniqueColors = colors.reduce(uniqueColorsReducer, [])

  // Chart maps
  const byNumberOfLines = uniqueColors.map(uc => ({
    title: uc,
    color: uc,
    value: saveData.lines.filter(l => l.brushColor === uc).length,
  }))
  const byNumberOfPoints = uniqueColors.map(uc => ({
    title: uc,
    color: uc,
    value: saveData.lines.filter(l => l.brushColor === uc).reduce(totalPointsReducer, 0),
  }))

  return (
    <div className='statistics'>
      {
        saveData
          ? <div className='dataset'>
              <Statlines
                saveData={saveData}
                points={points}
                uniqueColors={uniqueColors}
              />

              <ColorGroups
                saveData={saveData}
                uniqueColors={uniqueColors}
              />

              <ColorCharts
                byNumberOfLines={byNumberOfLines}
                byNumberOfPoints={byNumberOfPoints}
              />
            </div>
          : <p>Draw something to see statistics here. :)</p>
      }
    </div>
  )
}

export default Statistics