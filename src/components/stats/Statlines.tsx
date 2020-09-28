import React from 'react'

import { SaveDataModel } from '../../store/appSlice'

interface StatlineProps {
  name: string
  data: any
}

interface StatlinesProps {
  saveData: SaveDataModel
  points: number
  uniqueColors: string[]
}

const StatLine = ({ name, data }: StatlineProps) => <p><strong>{name}</strong><br/>{data}</p>

const Statlines = ({ saveData, points, uniqueColors }: StatlinesProps) => {
  return (
    <div className='statlines'>
      <StatLine name='Canvas height' data={saveData.height} />
      <StatLine name='Canvas width' data={saveData.width} />
      <StatLine name='Total lines' data={saveData.lines ? saveData.lines.length : 0} />
      <StatLine name='Colors used' data={uniqueColors.map(uc => (
        <span key={Math.random()} style={{ color: uc, display: 'block' }}>{uc}</span>
      ))} />
      <StatLine name='Total points' data={points} />
    </div>
  )
}

export default Statlines
