import React from "react";
import { saveAs } from "file-saver";
import Button from "./button";

interface Props {
  filename: string;
  savedata: XMLDocument;
  style?: React.CSSProperties;
}

export default function SaveExport({
  filename,
  savedata,
  style,
}: Props): React.JSX.Element {
  const handleExport = (): void => {
    const serializer = new XMLSerializer();
    const savedataAsString = serializer.serializeToString(savedata);
    const savefile = new Blob([savedataAsString], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(savefile, filename);
  };

  return (
    <Button style={style} onClick={handleExport}>
      Export savefile
    </Button>
  );
}
