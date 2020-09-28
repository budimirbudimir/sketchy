import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import { AppThunk } from './store'

// TYPES
export interface RGBA {
  r: number
  g: number
  b: number
  a: number
}

interface Point {
  x: number
  y: number
}

interface Line {
  points: Point[]
  brushColor: string
  brushRadius: number
}

export interface SaveDataModel {
  lines?: Line[]
  width?: number
  height?: number
}

interface AppState {
  saveData: SaveDataModel
  tool: string
  zoom: number
  brushSize: number
  opacity: number
  hex: string
  rgba: RGBA
  loading: boolean
  error: null
}


// INITIAL STATE
const initialState: AppState = {
  saveData: {
    lines: [],
    width: 400,
    height: 400,
  },
  tool: 'pen',
  zoom: 100,
  brushSize: 5,
  opacity: 100,
  hex: '#000000',
  rgba: {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  },

  loading: false,
  error: null
}

interface RootState {
  app: AppState
}

// SLICE
const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    storeSaveData(state, action: PayloadAction<SaveDataModel>) {
      state.saveData = action.payload
    },
    setTool(state, action: PayloadAction<string>) {
      state.tool = action.payload
    },
    setZoom(state, action: PayloadAction<number>) {
      state.zoom = action.payload
    },
    setBrushSize(state, action: PayloadAction<number>) {
      state.brushSize = action.payload
    },
    setOpacity(state, action: PayloadAction<number>) {
      state.opacity = Math.round(action.payload)
    },
    setHex(state, action: PayloadAction<string>) {
      state.hex = action.payload
    },
    setRgba(state, action: PayloadAction<RGBA>) {
      state.rgba = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload
    },
  }
})

// EXPORTS
export const {
  storeSaveData,
  setTool,
  setZoom,
  setBrushSize,
  setOpacity,
  setHex,
  setRgba,
  setLoading,
  setError,
} = comments.actions
export default comments.reducer

// SELECTORS
export const selectSaveData = (state: RootState) => state.app.saveData;
export const selectTool = (state: RootState) => state.app.tool;
export const selectZoom = (state: RootState) => state.app.zoom;
export const selectBrushSize = (state: RootState) => state.app.brushSize;
export const selectOpacity = (state: RootState) => state.app.opacity;
export const selectHex = (state: RootState) => state.app.hex;
export const selectRgba = (state: RootState) => state.app.rgba;