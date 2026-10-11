import React, { useRef } from "react";
import Button from "./button";
import sample from "../sample-save";

interface Props {
  onFilenameChange: React.Dispatch<string>;
  onSavedataChange: (data: string) => void;
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
    onFilenameChange("sample.xml");
    onSavedataChange(sample);
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
  callback: (data: string) => void,
): void => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const savedataAsString = reader.result as string;
    callback(savedataAsString);
  });
  reader.readAsText(savefile);
};
