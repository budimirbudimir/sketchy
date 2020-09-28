import React from 'react'

import { BiUndo } from 'react-icons/bi';

interface UndoProps {
  undo: () => void
}

const Undo = ({ undo }: UndoProps) => {
  return (
    <div className='undo tool-btn' onClick={undo}>
      <BiUndo size='2em' />
    </div>
  )
}

export default Undo
