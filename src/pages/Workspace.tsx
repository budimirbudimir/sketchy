import React from 'react'
import CanvasDraw from 'react-canvas-draw'
import { useDispatch, useSelector } from 'react-redux'

import { downloadJSON } from '../utils/downloadJSON'
import rgba2hex from '../utils/rgba2hex'
import {
  // Types
  SaveDataModel,

  // Getters
  selectSaveData,
  selectZoom,
  selectTool,
  selectBrushSize,
  selectRgba,

  // Setters
  storeSaveData,
} from '../store/appSlice'

import { Settings } from '../components/settings'
import { Toolbar } from '../components/toolbar'
import { Styles } from '../components/styles'

import './Workspace.css'

export const Workspace = () => {
  const dispatch = useDispatch()
  const surfaceRef = React.useRef<any>(null)
  const canvasRef = React.useRef<any>(null)

  // Redux selectors
  const zoom = useSelector(selectZoom)
  const tool = useSelector(selectTool)
  const brushSize = useSelector(selectBrushSize)
  const rgba = useSelector(selectRgba)
  const saveData = useSelector(selectSaveData)

  // Redux actions
  const doStoreSaveData = (value: SaveDataModel) => dispatch(storeSaveData(value))

  // Local methods
  // TODO See to move away where needed, drop casting
  const undo = () => (canvasRef.current as any).undo()

  const clear = () => (canvasRef.current as any).clear()

  const getSaveData = (download = false) => {
    const data = (canvasRef.current as any).getSaveData()
    const fileName = `canvas_${+new Date()}` // hash files with timestamp
    doStoreSaveData(JSON.parse(data))
    if (download) downloadJSON(data, fileName, 'application/json')
  }
  
  const loadSaveData = (data: string, immediate: boolean) => {
    (canvasRef.current as any).loadSaveData(data, immediate)
  }

  const drawnSomething = () => getSaveData()

  // Ensures that last update to canvas is shown when page is reopened (ex. from Statistics page)
  React.useEffect(() => {
    if (saveData) (canvasRef.current as any).loadSaveData(JSON.stringify(saveData), false)
    // eslint-disable-next-line
  }, [])

  const canvasStyles = {
    width: `100%`,
    height: `100%`,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    overflow: 'auto',
    transform: `scale(${zoom / 100}, ${zoom / 100})`,
  }

  return (
    <div className='workspace'>
      <Settings
        getSaveData={getSaveData}
        loadSaveData={loadSaveData}
        storeSaveData={doStoreSaveData}
      />
      <div className='container'>
        <Toolbar
          undo={undo}
          clear={clear}
        />
        <div className='surface' ref={surfaceRef}>
          <CanvasDraw
            ref={canvasRef}
            style={canvasStyles}
            brushRadius={brushSize}
            brushColor={tool === 'eraser' ? '#FFFFFF' : rgba2hex(rgba)}
            hideGrid={true}
            lazyRadius={0}
            onChange={drawnSomething}
          />
        </div>
        <Styles />
      </div>
    </div>
  )
}

export default Workspace