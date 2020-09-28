import React from 'react'

import Pen from './Pen'
import Eraser from './Eraser'
import Clear from './Clear'
import Undo from './Undo'

import './Toolbar.css'

interface ToolbarProps {
  clear: () => void
  undo: () => void
}

export const Toolbar = ({ clear, undo }: ToolbarProps) => (
  <div className='toolbar'>
    <Pen />
    <Eraser />
    <Clear clear={clear} />
    <Undo undo={undo} />
  </div>
)

export default Toolbar