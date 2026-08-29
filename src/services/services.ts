import { HOST } from '../data/constants/constants';
import { KanjiType } from '../types/kanji-type';
import { LessonsDTO } from '../types/lessons-dto';
import { SearchDTO } from '../types/search-dto';
import { processResponse } from '../util/process-response';

export const DictServices = {
  getData: async (query: string): Promise<SearchDTO> => {
    const url = `${HOST}/search/${query}`;
    return processResponse<SearchDTO>(await fetch(url));
  },
};

export const LearnServices = {
  getData: async (query: string): Promise<KanjiType[]> => {
    const url = `${HOST}/kanji?kanji=${query}`;
    return processResponse<KanjiType[]>(await fetch(url));
  },
  getLessons: async (): Promise<LessonsDTO> => {
    const url = `${HOST}/lessons`;
    return processResponse<LessonsDTO>(await fetch(url));
  },
};
