"use client";

import { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

// Provider Component
const ContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0); // Define state here
  const [user , setUser] = useState(false)
  const [complatedSteps , setComplatedSteps] = useState([])

  return (
    <AppContext.Provider value={{ currentStep, setCurrentStep ,
        complatedSteps , setComplatedSteps
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to Use Context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProvider");
  }
  return context;
};

export default ContextProvider