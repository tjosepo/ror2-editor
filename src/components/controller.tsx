import React, { useState } from 'react';
import Editor from './editor';
import SaveExport from './save-export';
import SaveImport from './save-import';

export default function Controller() {
  const [filename, setFilename] = useState<string>("");
  const [savedata, setSavedata] = useState<XMLDocument>();

  return (
    <div className="container" style={{marginTop: "60px", marginBottom: "60px"}}>
      <h1>Risk of Rain 2: Save Editor</h1>
      {!savedata && 
      <>
        <SaveImport setFilename={setFilename} setSavedata={setSavedata} />
        <p>Please, always keep a backup of your previous save.</p>
      </>}
      {savedata &&
      <>
        <SaveExport filename={filename} savedata={savedata} />
        <Editor savedata={savedata} setSavedata={setSavedata} />
      </>
      }
    </div>
  );
}