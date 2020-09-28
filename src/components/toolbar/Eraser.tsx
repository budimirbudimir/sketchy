import React from 'react'
import classnames from 'classnames'

import { BiEraser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux'

import { selectTool, setTool } from '../../store/appSlice'


const Eraser = () => {
  const dispatch = useDispatch()

  const tool: string = useSelector(selectTool)

  const doSetTool = () => dispatch(setTool('eraser'))
  
  const classes = classnames({
    'eraser': true,
    'tool-btn': true,
    'selected': tool === 'eraser',
  });

  return (
    <div className={classes} onClick={doSetTool}>
      <BiEraser size='2em' />
    </div>
  )
}

export default Eraser
