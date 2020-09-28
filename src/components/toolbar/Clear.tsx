import React from 'react'

import { BiTrash } from 'react-icons/bi';

interface ClearProps {
  clear: () => void
}

const Clear = ({ clear }: ClearProps) => {
  return (
    <div className='clear tool-btn' onClick={clear}>
      <BiTrash size='2em' />
    </div>
  )
}

export default Clear
