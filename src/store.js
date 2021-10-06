import create from "zustand"

/* Audio */
import bgAudio from "./resources/Brytning.ogg"
const bg = new Audio(bgAudio)
bg.volume = 0.1
bg.loop = true
bg.play()

export const useStore = create((set) => ({
  // Score
  score: 0,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),

  // Gravity
  gravity: -30,
  setGravity: (value) => set({ gravity: value }),
}))
