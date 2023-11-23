import { kanji } from '../data/kanji/kanji';
import { vocab } from '../data/vocab/vocab';
import { QuizPoolType } from '../types/quiz-pool-type';
import { VocabType } from '../types/vocab-type';

const OPTIONS_AMOUNT = 4; // TODO: move the constant to its own file

export function getQuizPool(
  amount: number,
  kanjiLevel: number,
  vocabLevel: number
): QuizPoolType[] {
  const pool: QuizPoolType[] = [];

  const poolKanjiArray: string[] = kanji
    .filter((item) => item.jlpt === kanjiLevel)
    .map((item) => item.kanji);

  let poolVocabArray: VocabType[] = vocab.filter(
    (word) =>
      word.jlpt === vocabLevel &&
      word.kanji.split('').every((item) => poolKanjiArray.includes(item))
  );

  for (let i = 0; i < amount; i += 1) {
    const randomIndex = Math.floor(Math.random() * poolVocabArray.length);
    const current: QuizPoolType = {
      question: poolVocabArray[randomIndex],
      options: [],
    };

    poolVocabArray = [
      ...poolVocabArray.slice(0, randomIndex),
      ...poolVocabArray.slice(randomIndex + 1),
    ];

    let option = 1;

    while (option < OPTIONS_AMOUNT) {
      const randomOptionNumber = Math.floor(
        Math.random() * poolVocabArray.length
      );
      if (!current.options.includes(poolVocabArray[randomOptionNumber])) {
        current.options.push(poolVocabArray[randomOptionNumber]);
        option += 1;
      }
    }

    pool.push(current);
  }

  return pool;
}
