import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  // SaveDataModel
  // selectSaveData,
  selectZoom,
  setZoom,
} from '../../store/appSlice'
import resizeCanvases from '../../utils/resizeCanvases'

interface ZoomProps {
  loadSaveData: (data: string, immediate: boolean) => void
}

const Zoom = ({ loadSaveData }: ZoomProps) => {
  const dispatch = useDispatch()

  const zoom: number = useSelector(selectZoom)
  // const saveData: SaveDataModel = useSelector(selectSaveData)
  const doSetZoom = (value: number) => dispatch(setZoom(value))

  const doOnChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value) doSetZoom(parseInt(e.currentTarget.value))
    resizeCanvases(parseInt(e.currentTarget.value) / 100)
    
    // TODO Redraw canvas on zoom update
    // loadSaveData(saveData, false)
  }

  return (
    <div className='zoom'>
      <label>Zoom</label>
      <select id="zoom" value={zoom} onChange={doOnChange}>
        {/* <option value={200}>200%</option> */}
        <option value={100}>100%</option>
        <option value={75}>75%</option>
        <option value={50}>50%</option>
        <option value={25}>25%</option>
      </select>
    </div>
  )
}

export default Zoom
