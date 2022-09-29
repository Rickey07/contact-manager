import React, { createContext, useContext, useState } from "react";

const toggleModeContext = createContext();

export function ToggleModeContextProvider({ children }) {
  const [mode, setMode] = useState(false);

  return (
    <>
      <toggleModeContext.Provider value={{ mode, setMode }}>
        {children}
      </toggleModeContext.Provider>
    </>
  );
}

export function useModeContext() {
  return useContext(toggleModeContext);
}
