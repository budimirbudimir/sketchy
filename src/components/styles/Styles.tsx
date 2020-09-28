import React from 'react'
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux'

import hex2rgba from '../../utils/hex2rgba'
import rgba2hex from '../../utils/rgba2hex'
import { selectOpacity, selectHex, selectRgba, setOpacity, setHex, setRgba } from '../../store/appSlice'

import './Styles.css'

interface RGBA {
  r: number
  g: number
  b: number
  a: number
}

const Styles = () => {
  const dispatch = useDispatch()

  const opacity: number = useSelector(selectOpacity)
  const hex: string = useSelector(selectHex)
  const rgba: RGBA = useSelector(selectRgba)

  const doSetOpacity = (value: number) => dispatch(setOpacity(value))
  const doSetHex = (value: string) => dispatch(setHex(value))
  const doSetRgba = (value: RGBA) => dispatch(setRgba(value))

  const onChangeHex = (e: any) => {
    // Set HEX on controlled input
    doSetHex(e.target.value)

    // If HEX is valid, update RGBa too
    if (e.target.value.length === 7) {
      doSetRgba(hex2rgba(e.target.value))
    }
  }

  const onChangeOpacity = (e: any) => {
    // Set HEX on controlled input
    doSetOpacity(e.target.value)
    const newRgba = { ...rgba, a: e.target.value / 100 }
    doSetRgba(newRgba)
    doSetHex(rgba2hex(newRgba))
  }

  const onChangePicker = (value: any) => {
    doSetRgba(value.rgb)
    doSetHex(value.hex)
    doSetOpacity(value.rgb.a * 100)
  }

  return (
    <div className='styles'>
      <div className='colorPicker'>
        <ChromePicker
          alpha={opacity}
          color={rgba}
          onChange={onChangePicker}
        />
      </div>
      <div className='hex'>
        <label>Hex</label>
        <input
          type='text'
          id='hex'
          value={hex}
          onChange={onChangeHex}
        />
      </div>
      <div className='opacity'>
        <label>Opacity</label>
        <input
          type='text'
          id='opacity'
          value={opacity}
          onChange={onChangeOpacity}
        />
      </div>
    </div>
  )
}

export default Styles
