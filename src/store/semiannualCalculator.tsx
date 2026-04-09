import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
interface KsqInputItem {
  id: string;
  value: number;
}

interface Results {
  ksqAvg: number;
  score: number;
  grade:number;
}

interface InputState {
  Ksqinputs: KsqInputItem[];
  BsqValue: number;
  results: Results;
  addInput: () => void;
  removeInput: (id: string) => void;
  handleChangeKsq: (id: string, val: number) => void;
  handleChangeBsq: (val: number) => void;
  isBsqActive: boolean;
  toggleBsq: (val: boolean) => void;
  getKsqAvg: () => number;
  calculateResults: () => void;
  getFinalScore: () => number;
  getGrade: (score: number) => number;
}

export const semiannualCalculator = create<InputState>()((set, get) => ({
  Ksqinputs: [
    { id: uuidv4(), value: 0 },
    { id: uuidv4(), value: 0 },
  ],
  results: {
    ksqAvg: 0,
    score: 0,
    grade:0
  },
  BsqValue: 0,
  isBsqActive: true,
  toggleBsq: (val) => set({ isBsqActive: val }),

  addInput: () => {
    set((state) => ({
      Ksqinputs: [...state.Ksqinputs, { id: uuidv4(), value: 0 }],
    }));
  },
  removeInput: (id) => {
    set((state) => ({
      Ksqinputs: state.Ksqinputs.filter((input) => input.id !== id),
    }));
  },

  //!  {ChangeInputValue}

  handleChangeKsq: (id: string, val: number) => {
    set((state) => ({
      Ksqinputs: state.Ksqinputs.map((item) =>
        item.id === id ? { ...item, value: val || 0 } : item,
      ),
    }));
  },

  handleChangeBsq: (val: number) => {
    set(() => ({
      BsqValue: val || 0,
    }));
  },

  //! { Calculate}

  getKsqAvg: () => {
    const { Ksqinputs } = get();
    const sum = Ksqinputs.reduce((acc, curr) => acc + curr.value, 0);
    const count = Ksqinputs.length;
    return count > 0 ? Number((sum / count ).toFixed(2)) : 0;
  },

  getGrade: (score) => {
    if (score >= 81) return 5;
    if (score >= 61) return 4;
    if (score >= 31) return 3;
    return 2;
  },

  getFinalScore: () => {
    const { Ksqinputs, BsqValue, isBsqActive } = get();

    const sum = Ksqinputs.reduce((acc, curr) => acc + curr.value, 0);
    const count = Ksqinputs.length;
    const total = count > 0 ? Number((sum / count).toFixed(2)) : 0;

    if (!isBsqActive) {
      return Number(total * 0.4);
    }

    return Number((total * 0.4 + BsqValue * 0.6).toFixed(2));
  },

  calculateResults: () => {
    const { getFinalScore, getKsqAvg, getGrade } = get();
    const score = getFinalScore();
    const ksqAvg = getKsqAvg();
    const grade = getGrade(score);

    set({
      results: {
        score,
        grade,
        ksqAvg
      }
    });
  },
}));
