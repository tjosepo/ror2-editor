import React, { useRef } from 'react';

export default function SaveInput({ filename, setFilename, setSavedata }: { filename: string, setFilename:React.Dispatch<string>, setSavedata: React.Dispatch<XMLDocument> }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (files : FileList | null) => {
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
        onChange={(e) => handleInput(e.target.files)}
        ref={inputRef}
        />
      <button type="button" className="btn btn-primary" onClick={(e) => click()}>
          {filename || "Load savefile"}
      </button>
    </>
  );
}