import React, { useRef } from "react";
import Button from "./button";
import sample from "../sample-save";

interface Props {
  onFilenameChange: React.Dispatch<string>;
  onSavedataChange: React.Dispatch<XMLDocument>;
  style?: React.CSSProperties;
}

export default function SaveImport({
  onFilenameChange,
  onSavedataChange,
  style,
}: Props): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const files = event.target.files;
    if (files === null) return;
    if (files.length === 0) return;
    const savefile = files[0];

    onFilenameChange(savefile.name);
    getSavedata(savefile, onSavedataChange);
  };

  const handleClick = (): void => {
    const input = inputRef.current as HTMLInputElement;
    input.click();
  };

  const handleImportSample = (): void => {
    const parser = new DOMParser();
    const savedata = parser.parseFromString(sample, "text/xml") as XMLDocument;
    console.log(savedata);
    onFilenameChange("sample.xml");
    onSavedataChange(savedata);
  };

  return (
    <>
      <input
        hidden
        aria-hidden
        type="file"
        accept="text/xml"
        onChange={handleInputFileChange}
        ref={inputRef}
      />
      <Button style={style} onClick={handleClick}>
        Import savefile
      </Button>
      <div style={{ textAlign: "center" }}>
        <button className="link" onClick={handleImportSample}>
          Just want to try it out? Use our sample savefile
        </button>
      </div>
    </>
  );
}

const getSavedata = (
  savefile: File,
  callback: (saveData: XMLDocument) => void,
): void => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const parser = new DOMParser();
    const savedataAsString = reader.result as string;
    const savedata = parser.parseFromString(
      savedataAsString,
      "text/xml",
    ) as XMLDocument;
    callback(savedata);
  });
  reader.readAsText(savefile);
};
