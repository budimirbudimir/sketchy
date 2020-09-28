import React from 'react'

import { SaveDataModel } from '../../store/appSlice'

import Group from './Group'

interface Point {
  x: number
  y: number
}

interface LineProps {
  points: Point[]
  brushColor: string
  brushRadius: number
}

export interface LineComponentProps {
  line: LineProps
}

export interface GroupProps {
  groupColor: string
  lines?: LineProps[]
}

interface ColorGroupsProps {
  saveData: SaveDataModel
  uniqueColors: string[]
}

const ColorGroups = ({ saveData, uniqueColors }: ColorGroupsProps) => {
  return (
    <div className='groups'>
      {uniqueColors.map(uc => (
        <Group key={Math.random()} lines={saveData.lines} groupColor={uc} />
      ))}
    </div>
  )
}

export default ColorGroups
