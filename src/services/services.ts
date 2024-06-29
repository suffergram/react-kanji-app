import { HOST } from '../data/constants/constants';
import { SearchDTO } from '../types/search-dto';

export class DictServices {
  static async getSearchData(query: string): Promise<SearchDTO> {
    const url = `${HOST}/search/${query}`;

    const response = await fetch(url);

    if (!response.ok) return Promise.reject(new Error('Bad Response'));

    return response.json();
  }
}
