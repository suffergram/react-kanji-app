// import { useEffect, useState } from 'react';
// import { handleGetKanjiAction } from '../../state/kanji-action-creators';
// import { HOST } from '../../data/constants/constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { RootState } from '../../types/root-state';
// import { AnyAction } from 'redux';
// import { fetchKanji } from '../../state/fetch-kanji';
// import { useSearchParams } from 'react-router-dom';

// export function useLoadKanji() {
//   const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

//   const [searchParams] = useSearchParams(new URLSearchParams());

//   const { kanji } = useSelector((state: RootState) => state.kanjiState);

//   useEffect(() => {
//     dispatch(fetchKanji(searchParams));
//   }, [searchParams]);

//   console.log('useLoadKanji', kanji);
//   return { kanji };
// }
