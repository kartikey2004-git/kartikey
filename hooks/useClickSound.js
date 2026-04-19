"use client";

import { useCallback, useRef } from "react";

export const useClickSound = (soundType = "default") => {
  const audioRef = useRef(null);

  // Preload the audio file
  if (!audioRef.current) {
    audioRef.current = new Audio(
      "/matthewvakaliuk73627-mouse-click-290204.mp3",
    );
    audioRef.current.volume = 0.2; // Set volume to 20%
  }

  const playSound = useCallback(() => {
    try {
      if (audioRef.current) {
        // Reset and play the sound
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          console.log("Audio playback blocked:", error);
        });
      }
    } catch (error) {
      console.log("Audio not supported:", error);
    }
  }, []);

  return playSound;
};
