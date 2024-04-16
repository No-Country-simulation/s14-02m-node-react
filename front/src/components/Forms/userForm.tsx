"use client";
import { Button, Textarea } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Key, useState } from "react";
import { defaultLang } from "@/configs/defaultLang";
import { useHistoryStore } from "@/stores/historyStore";
import { IBackendResponse } from "@/interfaces/backRes.interface";
import { ChatRol, ILanguageCodes } from "@/interfaces/user.interface";
import crypto from "crypto";
import { IGroupedMessage, ISingleMessage } from "@/interfaces/message.interface";

export default function UserForm() {
	//Se actualiza desde onValueChange
	const [message, setMessage] = useState("");
	//Se actualiza con handleSelectionChange, es el lenguaje de salida.
	const [langValue, setLangValue] = useState<ILanguageCodes>("en");
	//listenLoading determina si se renderiza el boton con spiner o no.
	const [listenLoading, setListenLoading] = useState(false);
	//Me traigo el historial de zustand
	const { updateHistory } = useHistoryStore();

	const msgId = crypto.randomBytes(8).toString("hex");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setListenLoading(true);
		// console.log("loading previo a try", loading);
		try {
			if (message.trim() !== "" && langValue.trim() !== "") {
				//Crea una variable temporal para que almacene mensaje e idioma de la petición del usuario
				const tempUserMessage: ISingleMessage = {
					langCode: langValue,
					message: message,
					rol: ChatRol.USER,
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
				const messageBubble: IGroupedMessage = {
					id: msgId,
					client: {
						langCode: parseRes.from as ILanguageCodes,
						message: tempUserMessage.message,
						rol: ChatRol.USER,
					},
					response: {
						langCode: tempUserMessage.langCode as ILanguageCodes,
						message: parseRes.translated,
						rol: ChatRol.IA,
					}
				}
				//Actualiza el store con la solicitud del usuario
				updateHistory(messageBubble);
				//Actualiza el store con la respuesta de la API.
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
		const selectedLang = langCode.toString() as ILanguageCodes
		setLangValue(selectedLang);
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
			</div>
		</>
	);
}
