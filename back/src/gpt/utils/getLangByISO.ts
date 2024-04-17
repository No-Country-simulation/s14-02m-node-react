import { defaultLang } from '../languages';

export const getLangByISO = (langCode: string) => {
  const findedLang = defaultLang.find((langObj) => langObj.to === langCode);
  if (!findedLang) return { name: undefined, to: undefined };
  return findedLang;
};
