import create from "zustand"

/* Audio imports */
import bgAudio from "./resources/Brytning.ogg"
import goAudio from "./resources/game-over.wav"

/* Audio */
const bg = new Audio(bgAudio)
const go = new Audio(goAudio)

bg.volume = 0.1
bg.loop = true
bg.play()

go.volume = 0.15

/* State */

export const useStore = create((set) => ({
  // Score
  score: 0,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),

  // Gravity
  gravity: -30,
  setGravity: (value) => set({ gravity: value }),

  // Audio
  gameOverAudio: go,
}))
