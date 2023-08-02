import React, { useContext, useState } from "react";

type SurverContextType = {};

export const SurveyContext = React.createContext<SurverContextType>(
  {} as SurverContextType
);

type PainLocation = "low back" | "center hip" | "left buttock"[];

export function SurveyProvider({ children }: any) {
  const [pain, setPain] = useState<number | null>(null);
  const [painLocation, setPainLocation] = useState<PainLocation | null>([]);

  const value = {};
  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
}

export const useSurveyContext = () => useContext(SurveyContext);
