export type VocabLessonItem = {
  vocabId: number;
  kanji: string;
  kana: string;
  meaning: string;
  romaji: string | null;
  note: string;
};

export type VocabLessonDTO = {
  slug: string;
  title: string;
  items: VocabLessonItem[];
};