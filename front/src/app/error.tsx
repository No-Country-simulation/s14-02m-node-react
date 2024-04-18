"use client"
import { useHistoryStore } from "@/stores/historyStore";
import { Image } from "@nextui-org/react";
import { useEffect } from "react";

interface IError {
    error: Error & { digest?: string }
    reset: () => void
}
export default function ErrorPage({ error, reset }: IError) {
    const { cleanHistory } = useHistoryStore()
    
    useEffect(() => {
        cleanHistory()
    }, [])
    console.error(error)
    return (
        <div className="text-gris w-10/12 max-w-80 mx-auto my-auto text-center flex flex-col justify-center gap-10">
            <Image src="/error.gif" width={300} className="mt-6"/>
            <h1 className="text-lg md:text-2xl">
                ¡UPS! <br />
                Hubo un <span className="text-primario">error</span>.
            </h1>
            <h2 className="text-base md:text-lg">Ocurrió un error inesperado en TalkIAmos</h2>
            <p className="text-sm md:text-base">
                Lamentamos lo sucedido, por favor intente acceder nuevamente <a onClick={() => reset()} href="#" className="font-bold text-primario">haciendo click aquí</a>
            </p>
        </div>
    )
}