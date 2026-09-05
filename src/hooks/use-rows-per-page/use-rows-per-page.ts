import { useEffect, useState } from 'react';

const RESIZE_DELAY = 150;

export function useRowsPerPage(kanjiRowHeight = 150, vocabRowHeight = 90) {
  const [rows, setRows] = useState({ kanji: 3, vocab: 6 });

  useEffect(() => {
    let timer: number;

    const calc = () => {
      const availableHeight = window.innerHeight * 0.5;
      setRows({
        kanji: Math.max(1, Math.floor(availableHeight / kanjiRowHeight)),
        vocab: Math.max(1, Math.floor(availableHeight / vocabRowHeight)),
      });
    };

    const handleResize = () => {
      clearTimeout(timer);
      timer = window.setTimeout(calc, RESIZE_DELAY);
    };

    calc();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [kanjiRowHeight, vocabRowHeight]);

  return rows;
}
