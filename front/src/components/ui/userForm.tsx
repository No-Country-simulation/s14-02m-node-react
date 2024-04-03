"use client";
import { IresponseGPT } from "@/interfaces/gpt.interface";
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState } from "react";

const defaultLang = [{
    to: "en",
    name: "English"
}]
export default function UserForm() {
    //Se actualiza desde onValueChange
    const [message, setMessage] = useState("");
    //Se actualiza con handleSelectionChange
    const [langValue, setLangValue] = useState('en')
    const [responseGPT, setResponseGPT] = useState<IresponseGPT | null>(null)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {            
            if (message.trim() !== "" && langValue.trim() !== "") {
                const response = await fetch('/api/translate', {
                    method: 'POST',
                    body: JSON.stringify({
                        message: message,
                        to: langValue
                    })
                })
                const parseRes: IresponseGPT = await response.json()
                console.log(parseRes);
                setResponseGPT(parseRes)
            } else {
                alert("Por favor complete todos los campos...");
            }
        } catch (error) {
            console.log({error});
        }
    };

    return (
        <>
            <div className="form-wrapper w-full mt-4">
                <form 
                    className="flex flex-col gap-4" 
                    onSubmit={handleSubmit}>
                    <Textarea
                        label="Introduce el texto a traducir aquí..."
                        color="primary"
                        radius="lg"
                        variant="faded"
                        onValueChange={setMessage}
                    />
                    <Select
                        className=""
                        color="primary"
                        radius="lg"
                        variant="faded"
                        label="Idioma de salida"
                        // onSelectionChange={setLangValue}
                        onChange={(e) => setLangValue(e.target.value)}
                        >
                        {
                            defaultLang.map((lang) => (
                                <SelectItem key={lang.to} value={lang.to}>
                                    {lang.name}
                                </SelectItem>
                            ))       
                        }
                    </Select>
                    <Button
                        children="Traducir"
                        type="submit"
                        color="secondary"
                    />
                </form>
                {responseGPT && <>
                    Respuesta ChatGPT: {responseGPT.translated}
                    <br></br>
                    Idioma: {responseGPT.from}
                </>}
            </div>
        </>
    );
}
