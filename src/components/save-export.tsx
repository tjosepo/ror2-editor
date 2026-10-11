import React from "react";
import { saveAs } from "file-saver";
import Button from "./button";
import { generateModifiedXml } from "../lib/save-operations";
import { RawUserProfile, SaveData } from "../data/types";

interface Props {
  filename: string;
  rawProfile: RawUserProfile;
  saveData: SaveData;
  style?: React.CSSProperties;
}

export default function SaveExport({
  filename,
  rawProfile,
  saveData,
  style,
}: Props): React.JSX.Element {
  const handleExport = (): void => {
    try {
      const xmlString = generateModifiedXml(rawProfile, saveData);
      const savefile = new Blob([xmlString], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(savefile, filename);
    } catch (error) {
      console.error("Failed to export save file:", error);
      alert("Failed to generate save file. Check console for details.");
    }
  };

  return (
    <Button style={style} onClick={handleExport}>
      Export savefile
    </Button>
  );
}
