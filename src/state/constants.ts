export enum QuizActions {
  HandleStartQuiz = 'HANDLE_START_QUIZ',
  HandleEndQuiz = 'HANDLE_END_QUIZ',
  HandleNewQuestion = 'HANDLE_NEW_QUESITON',
  HandleSubmitAnswer = 'HANDLE_SUBMIT_ANSWER',
  HandleAddQuestion = 'HANDLE_ADD_QUESTION',
  HandleQuizResult = 'HANDLE_QUIZ_RESULT',
  HandleKanjiLevel = 'HANDLE_KANJI_LEVEL',
  HandleVocabLevel = 'HANDLE_VOCAB_LEVEL',
  HandleLoading = 'HANDLE_LOADING_QUIZ',
  HandleError = 'HANDLE_ERROR_QUIZ',
}

export enum DictActions {
  HandleLoadingDict = 'HANDLE_LOADING_DICT',
  HandleGetDict = 'HANDLE_GET_DICT',
  HandleInitDict = 'HANDLE_INIT_DICT',
  HandleSetSearch = 'HANDLE_SET_SEARCH',
  HandleError = 'HANDLE_ERROR_DICT',
}

export enum LearnActions {
  HandleStartLearn = 'HANDLE_START_LEARN',
  HandleEndLearn = 'HANDLE_END_LEARN',
  HandleGetLearn = 'HANDLER_GET_LEARN',
  HandleGetLessons = 'HANDLE_GET_LESSONS',
  HandleLoading = 'HANDLE_LOADING_LEARN',
  HandleError = 'HANDLE_ERROR_LEARN',
}
