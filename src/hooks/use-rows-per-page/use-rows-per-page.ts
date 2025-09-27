import { useEffect, useState } from 'react';

export function useRowsPerPage(kanjiRowHeight = 203, vocabRowHeight = 103) {
  const [rows, setRows] = useState({ kanji: 3, vocab: 6 });

  useEffect(() => {
    const calc = () => {
      const availableHeight = window.innerHeight * 0.5;
      setRows({
        kanji: Math.max(1, Math.floor(availableHeight / kanjiRowHeight)),
        vocab: Math.max(1, Math.floor(availableHeight / vocabRowHeight)),
      });
    };

    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [kanjiRowHeight, vocabRowHeight]);

  return rows;
}
