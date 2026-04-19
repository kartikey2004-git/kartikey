"use client";

import { useCallback, useRef, useEffect } from "react";

export const useClickSound = (soundType = "default") => {
  const audioRef = useRef(null);

  // Preload the audio file only on client side
  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new Audio(
        "/matthewvakaliuk73627-mouse-click-290204.mp3",
      );
      audioRef.current.volume = 0.2; // Set volume to 20%
    }
  }, []);

  const playSound = useCallback(() => {
    try {
      if (typeof window !== "undefined" && audioRef.current) {
        // Reset and play the sound
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          // Silent fail if audio playback is blocked
          console.log("Audio playback blocked:", error);
        });
      }
    } catch (error) {
      // Silent fail if audio is not supported
      console.log("Audio not supported:", error);
    }
  }, []);

  return playSound;
};
