export default async function IdUser({params}: {params: {id: string}}){     
        const userData = await fetch(`www...../${params.id}`)
        return (
            <>
                <p>Id user: {params.id}</p>
            </>
        )
}