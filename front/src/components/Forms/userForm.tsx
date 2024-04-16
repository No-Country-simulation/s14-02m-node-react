"use client";
import { Button, Textarea } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { ChangeEvent, Key, useState } from "react";
import ResponseGPT from "@/components/responseGPT";
import { defaultLang } from "@/configs/defaultLang";
import { useHistoryStore } from "@/stores/historyStore";
import Link from "next/link";
import { IBackendResponse } from "@/interfaces/backRes.interface";
import { ChatRol, ILanguageCodes } from "@/interfaces/user.interface";
import crypto from "crypto";

export default function UserForm() {
	//Se actualiza desde onValueChange
	const [message, setMessage] = useState("");
	//Se actualiza con handleSelectionChange, es el lenguaje de salida.
	const [langValue, setLangValue] = useState("en");
	const [responseGPT, setResponseGPT] = useState<IBackendResponse | null>(null);
	//listenLoading determina si se renderiza el boton con spiner o no.
	const [listenLoading, setListenLoading] = useState(false);
	//Me traigo el historial de zustand
	const history = useHistoryStore((state) => state.history);
	const updateHistory = useHistoryStore((state) => state.updateHistory);

	const msgId = crypto.randomBytes(20).toString("hex");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setListenLoading(true);
		// console.log("loading previo a try", loading);
		try {
			if (message.trim() !== "" && langValue.trim() !== "") {
				//Crea una variable temporal para que almacene mensaje e idioma de la petición del usuario
				const tempUserMessage = {
					langCode: langValue,
					message: message,
					rol: "user",
				};
				const response = await fetch("/api/translate", {
					method: "POST",
					body: JSON.stringify({
						message: message,
						to: langValue,
					}),
				});
				// console.log(response)
				const parseRes: IBackendResponse = await response.json();
				// console.log(parseRes);
				setResponseGPT(parseRes);
				//Actualiza el store con la solicitud del usuario
				updateHistory({
					id: msgId,
					langCode: parseRes.from as ILanguageCodes,
					message: tempUserMessage.message,
					rol: ChatRol.USER,
				});
				//Actualiza el store con la respuesta de la API.
				updateHistory({
					id: msgId,
					langCode: tempUserMessage.langCode as ILanguageCodes,
					message: parseRes.translated,
					rol: ChatRol.IA,
				});
				setListenLoading(false);
			} else {
				alert("Por favor complete todos los campos...");
			}
		} catch (error) {
			console.log({ error });
		}
	};
	// console.log("Log de history en userForm", history);
	const handleSelectChange = (langCode: Key) => {
		setLangValue(langCode as string);
	};
	return (
		<>
			<div className="form-wrapper w-full mt-4">
				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<Textarea
						className="customTheme"
						placeholder="Introduce tu texto"
						color="primary"
						radius="lg"
						variant="bordered"
						onValueChange={setMessage}
					/>
					<Autocomplete
						radius="lg"
						variant="bordered"
						label="Idioma de salida"
						onSelectionChange={handleSelectChange}
						defaultSelectedKey={langValue}
					>
						{defaultLang.map((lang) => (
							<AutocompleteItem key={lang.to} value={lang.to}>
								{lang.name}
							</AutocompleteItem>
						))}
					</Autocomplete>
					{/* Renderiza condicionalmente los botones con el spinner en función de listenLoading*/}
					{listenLoading ? (
						<Button
							className="customTheme w-40"
							children="Traduciendo"
							type="submit"
							color="primary"
							isLoading={true}
						/>
					) : (
						<Button
							className="customTheme w-40"
							children="Traducir"
							type="submit"
							color="primary"
							isLoading={false}
						/>
					)}
				</form>
				{responseGPT && <ResponseGPT response={responseGPT} />}
				<Button>
					<Link href="/history">To history</Link>
				</Button>
			</div>
		</>
	);
}
