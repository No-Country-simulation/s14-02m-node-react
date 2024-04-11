import { defaultLang } from "@/configs/defaultLang";
import { ILanguageCodes } from "@/interfaces/user.interface";

export const filterLanguage = (langCode: ILanguageCodes) => {
    const findedLang = defaultLang.find(langObj => langObj.to === langCode)
    if(!findedLang) return {name: undefined, to: undefined}
    return findedLang
}