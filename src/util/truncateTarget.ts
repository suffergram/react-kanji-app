import { DELIMITER } from '../data/constants/constants';

export const truncateTarget = (target?: string, maxLength: number = 30) => {
  if (!target) return null;

  if (target.length <= maxLength) return target;

  const parts = target.split(DELIMITER);
  let result = '';

  for (const part of parts) {
    const temp = result ? result + DELIMITER + part : part;
    if (temp.length > maxLength) {
      break;
    }
    result = temp;
  }

  return result;
};
