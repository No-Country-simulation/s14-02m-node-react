import { create } from 'zustand'

// declaración de interfaz
interface Counter{
    counter: number
    increase: () => void
}

// set para cambiar el estado
// get para obtener el estado previo
export const counterStore = create<Counter>((set, get) => ({
    counter: 0,
    increase: () => {
        const { counter } = get()
        set({counter: counter + 1})
    }
}))