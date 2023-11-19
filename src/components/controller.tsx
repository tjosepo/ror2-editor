import React, { createContext, useState, useSyncExternalStore } from "react";
import Editor from "./editor";
import SaveExport from "./save-export";
import SaveImport from "./save-import";

const savedata: XMLDocument | undefined = undefined;

function subscribe(callback: () => void) {
  window.addEventListener("save-update", callback);
  return () => window.removeEventListener("save-update", callback);
}

function getSnapshot<T = any>(selector?: (save: XMLDocument) => T): () => T | undefined {
  if (!savedata) return () => undefined;
  if (!selector) return () => undefined;
  return () => selector(savedata);
}

function useSaveData<T = any>(selector: (save: XMLDocument) => T) {
  const savedata = useSyncExternalStore(subscribe, getSnapshot(selector));
}


export default function Controller() {
  const [filename, setFilename] = useState<string>("");
  const [savedata, setSavedata] = useState<XMLDocument>();

  return (
    <div className="container">
      <h1>Risk of Rain 2: Save Editor</h1>
      <p>
        This editor is still a work in progress, and might cause some game
        breaking bugs or other data loss.
        <br />
        Always keep a backup of your original save.
      </p>
      <p>
        Your savefile should be located at:{" "}
        <span style={{ color: "#E3E9EB" }}>
          C:\Program Files
          (x86)\Steam\userdata\[Number]\632360\remote\UserProfiles
        </span>
      </p>
      {savedata ? (
        <>
          <SaveExport
            style={{ width: "100%", marginBottom: "1rem" }}
            filename={filename}
            savedata={savedata}
          />
          <Editor savedata={savedata} setSavedata={setSavedata} />
        </>
      ) : (
        <>
          <SaveImport
            style={{ width: "100%", marginBottom: "1rem" }}
            setFilename={setFilename}
            setSavedata={setSavedata}
          />
        </>
      )}
    </div>
  );
}
