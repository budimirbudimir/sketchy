import React from 'react'
import classnames from 'classnames'

import { BiPencil } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux'
import { selectTool, setTool } from '../../store/appSlice'

const Pen = () => {
  const dispatch = useDispatch()

  const tool: string = useSelector(selectTool)

  const doSetTool = () => dispatch(setTool('pen'))

  const classes = classnames({
    'pen': true,
    'tool-btn': true,
    'selected': tool === 'pen',
  });

  return (
    <div className={classes} onClick={doSetTool}>
      <BiPencil size='2em' />
    </div>
  )
}

export default Pen
