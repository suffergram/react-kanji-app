export const initialQuizState = {
  isLoading: false,
  isOngoing: false,
  isResulting: false,
  answers: [],
  pool: [],
  current: {
    id: -1,
    data: null,
  },
  amount: 5,
  kanjiLevel: 5,
  vocabLevel: 5,
  error: undefined,
};

export const initialDictState = {
  isLoading: false,
  kanji: [],
  vocab: [],
  search: '',
  error: undefined,
};
