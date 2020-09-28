import React from 'react'

import { Zoom, BrushSize } from './'

import './Settings.css'

interface SettingsProps {
  getSaveData: (dl: any) => void,
  loadSaveData: (data: string, immediate: boolean) => void,
  storeSaveData: (data: any) => void,
}

export const Settings = ({
  getSaveData,
  loadSaveData,
  storeSaveData,
}: SettingsProps) => {
  const loadFile = () => {
    let input: any, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileinput');
    if (!input) alert("Um, couldn't find the fileinput element.");
    else if (!input.files) alert("This browser doesn't seem to support the `files` property of file inputs.");
    else if (!input.files[0]) alert("Please select a file before clicking 'Load'");
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText (e: ProgressEvent<FileReader>) {
      const lines: any = (e.target as FileReader).result;
      const newArr = JSON.parse(lines); 
      loadSaveData(lines, false)
      storeSaveData(newArr)
    }
  }

  return (
    <div className='settings'>
      <Zoom loadSaveData={loadSaveData} />
      <BrushSize />
      <form id="jsonFile" name="jsonFile" encType="multipart/form-data">
        <input type='file' id='fileinput'/>
      </form>
      <button onClick={loadFile}>Load</button>
      <button onClick={getSaveData}>Save</button>
    </div>
  )
}

export default Settings