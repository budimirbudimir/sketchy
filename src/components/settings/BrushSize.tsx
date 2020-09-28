import React from 'react'
import Slider from 'rc-slider';
import { useDispatch, useSelector } from 'react-redux'

import { selectBrushSize, setBrushSize } from '../../store/appSlice'

import 'rc-slider/assets/index.css';

const BrushSize = () => {
  const dispatch = useDispatch()

  const brushSize: number = useSelector(selectBrushSize)
  const doSetBrushSize = (value: number) => dispatch(setBrushSize(value))

  return (
    <div className='brushSize'>
      <div>
        <label>Brush size: {brushSize}px</label>
      </div>
      <div className='max-150'>
        <Slider
          min={0}
          max={100}
          defaultValue={brushSize}
          onAfterChange={doSetBrushSize}
        />
      </div>
    </div>
  )
}

export default BrushSize
