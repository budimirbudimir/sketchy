import React from 'react'

import { LineComponentProps } from './ColorGroups'

const Line = ({ line }: LineComponentProps) => (
  <div className='line'>
    <div>Line of color {line.brushColor} with {line.points.length} points</div>
  </div>
)

export default Line
