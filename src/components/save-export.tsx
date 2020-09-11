import React from 'react';
import { saveAs } from 'file-saver';
import Button from './button';

export default function SaveExport({ filename, savedata }: { filename: string, savedata: XMLDocument }) {
  const _export = () => {
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
    <Button onClick={(e) => _export()}>
      Export savefile
    </Button>
  );
}