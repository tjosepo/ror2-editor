import React, { createContext, useContext, useState } from "react";

interface Context {
  savefile?: Savefile;
  setSavefile: React.Dispatch<Savefile>;
}

const SaveContext = createContext<Context>({} as any);
SaveContext.displayName = "SaveContext";

interface Props {
  children: React.ReactNode;
}

export interface Savefile {
  data: XMLDocument;
  filename: string;
}

const SaveProvider = ({ children }: Props) => {
  const [savefile, setSavefile] = useState<Savefile>();

  return (
    <SaveContext.Provider value={{ savefile, setSavefile }}>
      {children}
    </SaveContext.Provider>
  );
};

const useSave = () => useContext(SaveContext);

export default SaveContext;
export { SaveProvider, useSave };
