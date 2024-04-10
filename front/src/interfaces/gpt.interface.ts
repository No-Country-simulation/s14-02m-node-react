import { IUser } from "./user.interface";

export interface IresponseGPT {
    langCode: string,
    message: string,
    rol: IUser
}