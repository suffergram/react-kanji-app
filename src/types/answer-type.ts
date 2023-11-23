import { VocabType } from './vocab-type';

export type AnswerType = {
  card: VocabType;
  answer: VocabType;
  isRight: boolean;
};
