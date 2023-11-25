import { OPTIONS_AMOUNT } from '../data/constants/constants';
import { kanji } from '../data/kanji/kanji';
import { vocab } from '../data/vocab/vocab';
import { QuizPoolType } from '../types/quiz-pool-type';
import { VocabType } from '../types/vocab-type';

export function getQuizPool(
  amount: number,
  kanjiLevel: number,
  vocabLevel: number
): QuizPoolType[] {
  const pool: QuizPoolType[] = [];

  const poolKanjiArray: string[] = kanji
    .filter((item) => item.jlpt >= kanjiLevel)
    .map((item) => item.kanji);

  const poolVocabArray: VocabType[] = vocab.filter(
    (word) =>
      word.jlpt >= vocabLevel &&
      word.kanji.split('').every((item) => poolKanjiArray.includes(item))
  );

  let currentAmount = 0;

  while (currentAmount < amount) {
    const randomIndex = Math.floor(Math.random() * poolVocabArray.length);

    if (
      pool.every((item) => item.question.id !== poolVocabArray[randomIndex].id)
    ) {
      currentAmount += 1;

      const current: QuizPoolType = {
        question: poolVocabArray[randomIndex],
        options: [],
      };

      let option = 1;

      while (option < OPTIONS_AMOUNT) {
        const randomOption = Math.floor(Math.random() * poolVocabArray.length);
        if (
          randomOption !== randomIndex &&
          current.options.every(
            (item) => item.id !== poolVocabArray[randomOption].id
          )
        ) {
          current.options.push(poolVocabArray[randomOption]);
          option += 1;
        }
      }

      pool.push(current);
    }
  }

  return pool;
}
