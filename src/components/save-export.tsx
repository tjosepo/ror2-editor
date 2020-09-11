import React from 'react';
import { saveAs } from 'file-saver';
import Button from './button';

interface Props {
  filename: string, 
  savedata: XMLDocument
  style?: React.CSSProperties
}

export default function SaveExport({ filename, savedata, style }: Props) {
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
    <Button style={style} onClick={(e) => _export()}>
      Export savefile
    </Button>
  );
}