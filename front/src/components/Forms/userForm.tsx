"use client";
import { IresponseGPT } from "@/interfaces/gpt.interface";
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import {useState } from "react";
import ResponseGPT from '@/components/responseGPT';
import { defaultLang } from "@/configs/defaultLang";


export default function UserForm() {
    //Loading
    let loading = false
    //Se actualiza desde onValueChange
    const [message, setMessage] = useState("");
    //Se actualiza con handleSelectionChange
    const [langValue, setLangValue] = useState('en')
    const [responseGPT, setResponseGPT] = useState<IresponseGPT | null>(null)
    const [listenLoading, setListenLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loading = true
        setListenLoading(loading)
        console.log("loading previo a try", loading)
        try {
            if (message.trim() !== "" && langValue.trim() !== "") { 
                const response = await fetch('/api/translate', {
                    method: 'POST',
                    body: JSON.stringify({
                        message: message,
                        to: langValue
                    })
                })
                // console.log(response)
                const parseRes: IresponseGPT = await response.json()
                // console.log(parseRes);
                setResponseGPT(parseRes)
                loading = false;
                setListenLoading(loading)
            } else {
                alert("Por favor complete todos los campos...");
            }
        } catch (error) {
            console.log({ error });
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
                    {/* Renderiza condicionalmente los botones con el spinner en función de listenLoading*/}
                    {
                        listenLoading ? <Button
                        children="Traducir"
                        type="submit"
                        color="secondary"
                        isLoading={true}
                        />
                        :
                        <Button
                        children="Traducir"
                        type="submit"
                        color="secondary"
                        isLoading={false}
                        />
                    }
                </form>
                {responseGPT && <ResponseGPT response={responseGPT} />}
            </div>
        </>
    );
}
