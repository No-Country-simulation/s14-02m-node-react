import { ChatRol, IChatRol } from "@/interfaces/user.interface";

export const filterRol = (rol: IChatRol) => {
    switch(rol){
        case ChatRol.IA: return 'TransIApp'
        case ChatRol.USER: return 'Usuario'
        default: return 'Desconocido'
    }
}