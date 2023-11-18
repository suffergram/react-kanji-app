import { kanji } from '../data/kanji/kanji';
import { vocab } from '../data/vocab/vocab';
import { VocabType } from '../types/vocab-type';

export function getRandomCard(kanjiLevel: number, vocabLevel: number) {
  const currentKanjiArray: string[] = kanji
    .filter((item) => item.jlpt === kanjiLevel)
    .map((item) => item.kanji);

  const currentVocab: VocabType[] = vocab.filter(
    (word) =>
      word.jlpt === vocabLevel &&
      word.kanji.split('').every((item) => currentKanjiArray.includes(item))
  );

  const current = currentVocab[Math.floor(Math.random() * currentVocab.length)];

  return current;
}
