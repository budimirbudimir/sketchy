import React from 'react'

import { GroupProps } from './ColorGroups'

import Line from './Line'

const Group = ({ groupColor, lines }: GroupProps) => (
  <div className='group'>
    <h3 style={{ color: groupColor }}>{groupColor}</h3>
    {
      lines && lines
        .filter((line) => line.brushColor === groupColor)
        .map((line) => <Line key={Math.random()} line={line} />)
    }
  </div>
)

export default Group
