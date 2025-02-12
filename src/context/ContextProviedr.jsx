"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const AppContext = createContext();

// Provider Component
const ContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0); // Define state here
  const [userGroupData , setUserGroupData] = useState(null)
  const [complatedSteps , setComplatedSteps] = useState([])

  useEffect(()=>{
    ;(async()=>{
      try {
        const { data } = await axios.get("/api/auth/user/getGroupedData")
        if (data.success) {
          setUserGroupData(data.groupData)
        }
      } catch (error) {
        console.log("🚀 ~ ; ~ error:", error)
      }
    })()
  },[])

  return (
    <AppContext.Provider value={{ currentStep, setCurrentStep ,
        complatedSteps , setComplatedSteps, userGroupData, setUserGroupData
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