"use client";

import { createContext, useContext } from "react";

const ReadingExperienceContext = createContext(null);

export function ReadingExperienceProvider({ value, children }) {
  return (
    <ReadingExperienceContext.Provider value={value}>
      {children}
    </ReadingExperienceContext.Provider>
  );
}

export function useReadingExperience() {
  const ctx = useContext(ReadingExperienceContext);
  if (!ctx) {
    throw new Error("useReadingExperience must be used within <ReadingExperience>");
  }
  return ctx;
}
