import { useRef } from "react";
import Button from "./button";
import sample from "../sample-save";

import { useSave } from "../contexts/save-context";

interface Props {
  style?: React.CSSProperties;
}

export default function SaveImport({ style }: Props) {
  const { setSavefile } = useSave();
  const inputRef = useRef<HTMLInputElement>(null);

  const _import = (files: FileList | null) => {
    if (files === null) return;
    if (files.length === 0) return;
    const file = files[0];
    getSavedata(file, (data: XMLDocument) => {
      setSavefile({
        data,
        filename: file.name,
      });
    });
  };

  const getSavedata = (savefile: File, callback: Function) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const parser = new DOMParser();
      const savedataAsString = reader.result as string;
      const savedata = parser.parseFromString(
        savedataAsString,
        "text/xml"
      ) as XMLDocument;
      callback(savedata);
    });
    reader.readAsText(savefile);
  };

  const click = () => {
    const input = inputRef.current as HTMLInputElement;
    input.click();
  };

  const importSample = () => {
    const parser = new DOMParser();
    const data = parser.parseFromString(sample, "text/xml") as XMLDocument;
    setSavefile({
      data,
      filename: "sample.xml",
    });
  };

  return (
    <>
      <input
        hidden
        aria-hidden
        type="file"
        accept="text/xml"
        onChange={(e) => _import(e.target.files)}
        ref={inputRef}
      />
      <Button style={style} onClick={(e) => click()}>
        Import savefile
      </Button>
      <div style={{ textAlign: "center" }}>
        <button className="link" onClick={importSample}>
          Just want to try it out? Use our sample savefile
        </button>
      </div>
    </>
  );
}
