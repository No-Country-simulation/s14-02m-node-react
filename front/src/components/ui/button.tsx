'use client'
import { counterStore } from "@/stores/counter-store"
import { Button } from "@nextui-org/react";

export default function Boton() {
    const { counter, increase } = counterStore()
    const handleButton = () => {
        increase()
    }
    return (
        <>
            <div className="flex flex-col gap-3 items-center">
                <Button onClick={handleButton} color="secondary">Hola soy un botón</Button>
                {counter}
            </div>
        </>
    )
}
