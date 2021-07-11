import React from "react";
import { saveAs } from "file-saver";
import Button from "./button";

import { Savefile, useSave } from "../contexts/save-context";

interface Props {
  style?: React.CSSProperties;
}

export default function SaveExport({ style }: Props) {
  const { savefile } = useSave();

  const _export = () => {
    if (!savefile) return;
    const blob = getSavefileBlob(savefile);
    saveAs(blob, savefile.filename);
  };

  const getSavefileBlob = ({ data }: Savefile) => {
    const serializer = new XMLSerializer();
    const savedataAsString = serializer.serializeToString(data);
    const blob = new Blob([savedataAsString], {
      type: "text/plain;charset=utf-8",
    });
    return blob;
  };

  return (
    <Button style={style} onClick={_export}>
      Export savefile
    </Button>
  );
}
