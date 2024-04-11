import { ILanguageCodes, IChatRol } from "./user.interface";

export interface IHistory {
    langCode: ILanguageCodes,
    message: string,
    rol: IChatRol
}