import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { quizReducer } from './quiz-reducer';
import { dictReducer } from './dict-reducer';
import { learnReducer } from './learn-reducer';

const rootReducer = combineReducers({
  quizState: quizReducer,
  dictState: dictReducer,
  learnState: learnReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
