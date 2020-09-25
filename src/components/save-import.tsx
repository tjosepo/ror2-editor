import React, { useRef } from 'react';
import Button from './button';
import sample from '../sample-save';

interface Props {
  setFilename: React.Dispatch<string>, 
  setSavedata: React.Dispatch<XMLDocument>,
  style?: React.CSSProperties
}

export default function SaveImport({ setFilename, setSavedata, style }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const _import = (files : FileList | null) => {
    if (files === null) return;
    if (files.length === 0) return;
    const savefile = files[0];
    setFilename(savefile.name);
    getSavedata(savefile, (savedata: XMLDocument) => {
      setSavedata(savedata)
    });
  }

  const getSavedata = (savefile : File, callback: Function) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const parser = new DOMParser();
      const savedataAsString = reader.result as string;
      const savedata = parser.parseFromString(savedataAsString, 'text/xml') as XMLDocument;
      callback(savedata);
    })
    reader.readAsText(savefile);
  }

  const click = () => {
    const input = inputRef.current as HTMLInputElement;
    input.click();
  }

  const importSample = () => {
    const parser = new DOMParser();
    const savedata = parser.parseFromString(sample, 'text/xml') as XMLDocument;
    console.log(savedata);
    setFilename("sample.xml");
    setSavedata(savedata);
  }

  return (
    <>
      <input
        hidden
        aria-hidden
        type="file"
        accept="text/xml"
        onChange={(e) => _import(e.target.files)}
        ref={inputRef}
        />
      <Button style={style} onClick={(e) => click()}>
        Import savefile
      </Button>
      <div style={{textAlign: "center"}}><button className="link" onClick={importSample}>Just want to try it out? Use our sample savefile</button></div>
    </>
  );
}