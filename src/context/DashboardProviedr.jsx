"use client";
import {createContext, useContext, useState} from "react";

const DashboardContext = createContext()
const DashboardProviedr = ({children}) => {
    const [moduleMode, SetModulemode] = useState(false)
    const [currentProductId, SetCurrentProductId] = useState("")
    const handelModulemode = (id) => {
        SetCurrentProductId(id)
        SetModulemode(true)
    }

    return <DashboardContext.Provider
        value={{
            moduleMode,
            SetModulemode,
            handelModulemode,
            currentProductId
        }}>
        {children}
    </DashboardContext.Provider>
}
export const useDahboardContext = () => {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error("useAppContext must be used within a ContextProvider");
    }
    return context;
};

export default DashboardProviedr