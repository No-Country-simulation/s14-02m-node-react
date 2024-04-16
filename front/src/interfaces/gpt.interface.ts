import { ILanguageCodes, IChatRol } from "./user.interface";

export interface IHistory {
    id: string,
    langCode: ILanguageCodes,
    message: string,
    rol: IChatRol
}