'use client'
import { GlobalLang } from "@/interfaces/globalLang.interface"
import { ILanguageCodes } from "@/interfaces/user.interface"
import { filterLanguage } from "@/utils/filterLanguage"
import { useEffect, useState } from "react"

export default function UserLanguage() {
    //estado que podría ser global en zustand
    const [lang, setLang] = useState<GlobalLang | null>(null)

    useEffect(() => {
        //es necesario verificar que la prop window exista
        if (typeof window !== 'undefined') {
            //prop navigator.language devuelve el código ISO del navegador
            //se utiliza el filtro para traer también el name
            const userLang = filterLanguage(window.navigator.language as ILanguageCodes)
            setLang(userLang as GlobalLang)
        }
    }, [])
    //solo retorno el componente si existe lang
    if (lang) return (
        <>
            Idioma del cliente: {lang.name}
        </>
    )
}