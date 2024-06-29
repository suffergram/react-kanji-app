export enum QuizActions {
  HandleStartQuiz = 'HANDLE_START_QUIZ',
  HandleEndQuiz = 'HANDLE_END_QUIZ',
  HandleNewQuestion = 'HANDLE_NEW_QUESITON',
  HandleSubmitAnswer = 'HANDLE_SUBMIT_ANSWER',
  HandleAddQuestion = 'HANDLE_ADD_QUESTION',
  HandleQuizResult = 'HANDLE_QUIZ_RESULT',
  HandleKanjiLevel = 'HANDLE_KANJI_LEVEL',
  HandleVocabLevel = 'HANDLE_VOCAB_LEVEL',
  HandleLoading = 'HANDLE_LOADING',
  HandleError = 'HANDLE_ERROR',
}

export enum DictActions {
  HandleLoadingDict = 'HANDLE_LOADING_DICT',
  HandleGetDict = 'HANDLE_GET_DICT',
  HandleInitDict = 'HANDLE_INIT_DICT',
  HandleSetSearch = 'HANDLE_SET_SEARCH',
}
