import { vocab } from '../data/vocab/vocab';
import { VocabType } from '../types/vocab-type';

export function getRandomCard(kanjiLevel: number, vocabLevel: number) {
  const currentVocab: VocabType[] = vocab.filter(
    (word) => word.jlpt === vocabLevel
  );

  const current = currentVocab[Math.floor(Math.random() * currentVocab.length)];

  return current;
}
