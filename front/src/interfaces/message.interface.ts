import { ILanguageCodes, IChatRol } from "./user.interface";

export interface ISingleMessage {
    langCode: ILanguageCodes,
    message: string,
    rol: IChatRol
}

export interface IGroupedMessage {
    id: string,
    client: ISingleMessage,
    response: ISingleMessage
}