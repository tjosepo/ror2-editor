import React, { useRef, useState } from 'react';

export default function SaveInput({ setSavedata }: { setSavedata: React.Dispatch<XMLDocument> }) {
  const [filename, setFilename] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (files : FileList | null) => {
    if (files === null) return;
    if (files.length === 0) return;
    const savefile = files[0];
    setFilename(savefile.name);
    readSavefile(savefile);
  }

  const readSavefile = (savefile : File) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const parser = new DOMParser();
      const result = reader.result as string;
      const savedata = parser.parseFromString(result, 'text/xml') as XMLDocument;
      setSavedata(savedata);
    })
    console.log(savefile);
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