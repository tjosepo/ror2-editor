import React, { useState } from "react";
import Editor from "./editor";
import { LogbookEditor } from "./LogbookEditor";
import SaveExport from "./save-export";
import SaveImport from "./save-import";
import { loadSaveFile, unlockAll, lockAll } from "../lib/save-operations";
import Button from "./button";
import type { RawUserProfile, SaveData } from "../data/types";
import "./controller.scss";



export default function Controller(): React.JSX.Element {
  const [filename, setFilename] = useState<string>("");
  const [saveData, setSaveData] = useState<SaveData | undefined>();
  const [rawProfile, setRawProfile] = useState<RawUserProfile | undefined>();


  const handleSavedataChange = (xmlString: string) => {
    try {
      const { raw, saveData: parsedData } = loadSaveFile(xmlString);
      setRawProfile(raw);
      setSaveData(parsedData);
    } catch (error) {
      console.error("Failed to parse save file:", error);
      alert("Failed to parse save file. Check console for details.");
    }
  };

  const handleUpdateSaveData = (newData: SaveData) => {
    setSaveData(newData);
  };

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
          C:\Program
          Files(x86)\Steam\userdata\[Number]\632360\remote\UserProfiles
        </span>
      </p>
      {saveData && rawProfile ? (
        <>
          <SaveExport
            style={{ width: "100%", marginBottom: "1rem" }}
            filename={filename}
            rawProfile={rawProfile}
            saveData={saveData}
          />

          <div className="editors-container" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            {/* Master Global Controls */}
            <div className="master-controls" style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1.5rem",
              backgroundColor: "#2b2f38",
              border: "1px solid #484b52",
              borderRadius: "4px",
              marginBottom: "1rem"
            }}>
              <div>
                <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#eff2f5" }}>Global Controls</h2>
                <p style={{ margin: "5px 0 0 0", color: "#8f95a0" }}>Manage all Challenges and Logbook entries at once.</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button onClick={() => handleUpdateSaveData(unlockAll(saveData))} style={{ fontSize: "1.1rem", padding: "12px 24px" }}>
                  Unlock Everything (All)
                </Button>
                <Button onClick={() => handleUpdateSaveData(lockAll(saveData))} className="bg-ror-legendary" style={{ fontSize: "1.1rem", padding: "12px 24px" }}>
                  Lock Everything (All)
                </Button>
              </div>
            </div>

            <Editor saveData={saveData} onSaveDataChange={handleUpdateSaveData} />

            <div className="section-divider" style={{
              height: "2px",
              backgroundColor: "#444",
              margin: "2rem 0"
            }} />

            <div id="logbook-section">
              <h2 style={{ marginBottom: "1rem", color: "#eff2f5" }}>Logbook</h2>
              <LogbookEditor saveData={saveData} onSaveDataChange={handleUpdateSaveData} />
            </div>
          </div>
        </>
      ) : (
        <SaveImport
          style={{ width: "100%", marginBottom: "1rem" }}
          onFilenameChange={setFilename}
          onSavedataChange={handleSavedataChange}
        />
      )}
    </div>
  );
}
