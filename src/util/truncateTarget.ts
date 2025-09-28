import { DELIMITER } from '../data/constants/constants';

export const truncateTarget = (target?: string, maxLength: number = 30) => {
  if (!target) return null;

  if (target.length <= maxLength) return target;

  const parts = target.split(DELIMITER);
  const firstPart = parts.shift();

  return parts.reduce((acc, part) => {
    const temp = acc ? acc + DELIMITER + part : part;
    return temp.length > maxLength ? acc : temp;
  }, firstPart || '');
};
