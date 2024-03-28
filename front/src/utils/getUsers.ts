'use server'

export const getUsers = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const todos = await data.json()
        return todos
    } catch (error) {
        console.log(error);
        return null
    }
}