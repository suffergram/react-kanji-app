import { HOST } from '../data/constants/constants';
import { KanjiType } from '../types/kanji-type';
import { LessonsDTO } from '../types/lessons-dto';
import { SearchDTO } from '../types/search-dto';
import { UserType } from '../types/user-type';
import { processResponse } from '../util/process-response';

export type SearchRequestParams = {
  page: number;
  kanji: number;
  vocab: number;
};

type Method = 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const sendJson = (method: Method, url: string, data?: unknown) =>
  fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: data === undefined ? undefined : JSON.stringify(data),
  });

export const DictServices = {
  getData: async (
    query: string,
    { page, kanji, vocab }: SearchRequestParams
  ): Promise<SearchDTO> => {
    const params = new URLSearchParams({
      page: String(page),
      limitKanji: String(kanji),
      limitVocab: String(vocab),
    });
    const url = `${HOST}/search/${query}?${params.toString()}`;
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

export const AuthServices = {
  me: async () => {
    const url = `${HOST}/auth/me`;
    return processResponse<UserType>(await fetch(url));
  },
  login: async (email: string, password: string) => {
    const url = `${HOST}/auth/login`;
    return processResponse<UserType>(
      await sendJson('POST', url, { email, password })
    );
  },
  register: async (email: string, password: string) => {
    const url = `${HOST}/auth/register`;
    return processResponse<UserType>(
      await sendJson('POST', url, { email, password })
    );
  },
  logout: async () => {
    const url = `${HOST}/auth/logout`;
    return processResponse<void>(await sendJson('POST', url));
  },
};

export const UserServices = {
  // null removes the nickname
  updateProfile: async (displayName: string | null) => {
    const url = `${HOST}/users/me`;
    return processResponse<UserType>(
      await sendJson('PATCH', url, { displayName })
    );
  },
  changePassword: async (currentPassword: string, newPassword: string) => {
    const url = `${HOST}/users/me/password`;
    return processResponse<void>(
      await sendJson('PATCH', url, { currentPassword, newPassword })
    );
  },
  changeEmail: async (email: string, currentPassword: string) => {
    const url = `${HOST}/users/me/email`;
    return processResponse<UserType>(
      await sendJson('PATCH', url, { email, currentPassword })
    );
  },
};
