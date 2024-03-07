import create from "zustand";

type ClauseStore = {
  isConfirmed: boolean;
  setConfirmed: (isConfirmed: boolean) => void;
};

const useClauseStore = create<ClauseStore>(set => ({
  isConfirmed: false,
  setConfirmed: isConfirmed => {
    set(state => ({ isConfirmed: isConfirmed }));
  },
}));

export default useClauseStore;
