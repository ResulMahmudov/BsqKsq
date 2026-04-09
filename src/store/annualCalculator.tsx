import { create } from 'zustand';

interface InputState {
  oneAnnual: number;
  twoAnnual: number;
  setOneAnnual: (val: number) => void;
  setTwoAnnual: (val: number) => void;
  calculateScore: () => void;
  getGrade: (score: number) => number;
  average: number;
}

export const annualCalculator = create<InputState>()((set, get) => ({
  oneAnnual: 0,
  twoAnnual: 0,
  average: 0,
  getGrade: (score) => {
    if (score >= 81) return 5;
    if (score >= 61) return 4;
    if (score >= 31) return 3;
    return 2;
  },

  setOneAnnual: (val) => set({ oneAnnual: val }),
  setTwoAnnual: (val) => set({ twoAnnual: val }),

  calculateScore: () => {
    const { oneAnnual, twoAnnual } = get();
    const result = Number(((oneAnnual + twoAnnual) / 2).toFixed(2));
    set({ average: result }); 
  },
}));
