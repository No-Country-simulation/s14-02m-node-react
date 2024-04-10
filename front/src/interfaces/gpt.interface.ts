import { IUser } from "./user.interface";

export interface IHistory {
    langCode: string,
    message: string,
    rol: IUser
}