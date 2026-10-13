import { createContext, useContext } from "react";
export const MotionPreferences = createContext(true);
export const usePortfolioMotion = () => useContext(MotionPreferences);
