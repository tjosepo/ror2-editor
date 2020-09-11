import React, { useRef } from 'react';
import Button from './button';

export default function SaveImport({ setFilename, setSavedata }: { setFilename:React.Dispatch<string>, setSavedata: React.Dispatch<XMLDocument> }) {
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
      <Button onClick={(e) => click()}>
        Import savefile
      </Button>
    </>
  );
}