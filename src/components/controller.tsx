import React, { useState } from 'react';
import SaveInput from './save-input';
import Editor from './editor';
import SaveDownload from './save-download';

export default function Controller() {
  const [filename, setFilename] = useState<string>("");
  const [savedata, setSavedata] = useState<XMLDocument>();

  return (
    <>
      <SaveInput filename={filename} setFilename={setFilename} setSavedata={setSavedata} />
      {(savedata && filename) && <SaveDownload filename={filename} savedata={savedata} />}
      {savedata && <Editor savedata={savedata} setSavedata={setSavedata} />}
    </>
  );
}