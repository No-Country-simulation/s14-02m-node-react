"use client"
import { useHistoryStore } from "@/stores/historyStore";

interface IError {
    error: Error & { digest?: string }
    reset: () => void
}
export default function ErrorPage({ error, reset }: IError) {
    const { cleanHistory } = useHistoryStore()
    cleanHistory()
    
    console.log({ error });
    return (
        <div className="text-gris w-10/12 max-w-80 mx-auto my-auto text-center flex flex-col justify-center gap-10">
            <h1 className="text-lg md:text-2xl">
                ¡UPS! <br />
                Hubo un <span className="text-primario">error</span>.
            </h1>
            <h2 className="text-base md:text-lg">Ocurrió un error inesperado en TalkIAmos</h2>
            <p className="text-sm md:text-base">
                Lamentamos lo sucedido, por favor intente acceder nuevamente <a href="#" onClick={() => reset()}>haciendo click aquí</a>
            </p>
        </div>
    )
}