"use client";
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function UserForm() {
    //Se actualiza desde onValueChange
    const [value, setValue] = useState("");
    //Se actualiza con handleSelectionChange
    const [langValue, setLangValue] = useState("")

    console.log("This is value: ", value);
    console.log("This is langValue:", langValue)

    //Array con idiomas disponibles para traducir
    const languages = ["Inglés","Portugués"]


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value.trim() !== "" && langValue.trim() !== "") {
            console.log("Traduciendo...");
        } else {
            alert("Por favor complete todos los campos...");
        }
    };

    //Handler del input de selección, ya que no deja hace set del estado desde la propiedad.
    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLangValue(e.target.value);
    }

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
                        onValueChange={setValue}
                    />
                    <Select
                        className=""
                        color="primary"
                        radius="lg"
                        variant="faded"
                        label="Idioma de salida"
                        onChange={handleSelectionChange}>
                        {
                            languages.map((lang:string) => (
                                <SelectItem key={lang}>
                                    {lang}
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
            </div>
        </>
    );
}
