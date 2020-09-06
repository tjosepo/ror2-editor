import React from 'react';
import { saveAs } from 'file-saver';

export default function SaveDownload({ filename, savedata }: { filename: string, savedata: XMLDocument }) {
  const download = () => {
    const savefile = getSavefile(savedata);
    saveAs(savefile, filename);
  }

  const getSavefile = (savedata: XMLDocument) => {
    const serializer = new XMLSerializer();
    const savedataAsString = serializer.serializeToString(savedata);
    const savefile = new Blob([savedataAsString], { type: 'text/plain;charset=utf-8' });
    return savefile;
  }

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={(e) => download()}>
          Download save
      </button>
    </>
  );
}