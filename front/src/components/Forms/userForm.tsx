"use client";
import { Button, Textarea } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { ChangeEvent, Key, useEffect, useState } from "react";
import { defaultLang } from "@/configs/defaultLang";
import { useHistoryStore } from "@/stores/historyStore";
import { IBackendResponse } from "@/interfaces/backRes.interface";
import { ChatRol, ILanguageCodes } from "@/interfaces/user.interface";
import crypto from "crypto";
import {
	IGroupedMessage,
	ISingleMessage,
} from "@/interfaces/message.interface";

export default function UserForm() {
	//Se actualiza desde onValueChange
	const [message, setMessage] = useState("");
	//Se actualiza con handleSelectionChange, es el lenguaje de salida.
	const [langValue, setLangValue] = useState<ILanguageCodes>("en");
	//listenLoading determina si se renderiza el boton con spiner o no.
	const [listenLoading, setListenLoading] = useState(false);
	//Me traigo el historial de zustand
	const { updateHistory } = useHistoryStore();
	//Seteo del limite de caracteres en input
	const [limitMsg, setLimitMsg] = useState({
		limit: 100,
		actual: 0,
	})

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
				console.log({ parseRes });
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
					},
					audioUrl: null,
				};
				//Actualiza el store con la solicitud del usuario y la respuesta de la API
				updateHistory(messageBubble);
				setMessage("")
				setLimitMsg({...limitMsg, actual: 0})
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
		const selectedLang = langCode as ILanguageCodes;
		setLangValue(selectedLang);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		let target = e.target.value
		if(target.length <= limitMsg.limit){
			setLimitMsg({...limitMsg, actual: target.length})
			setMessage(target)
		}
	}

	return (
		<>
				<form
					className="flex flex-col gap-4 justify-center items-center md:w-4/5 lg:w-3/5 mx-auto w-full"
					onSubmit={handleSubmit}
				>
					<Autocomplete
						radius="full"
						variant="bordered"
						placeholder="Idioma"
						label="Seleccione Idioma"
						labelPlacement="outside-left"
						size="md"
						onSelectionChange={handleSelectChange}
						defaultSelectedKey={langValue}
						className="autocomplete flex justify-center items-center max-w-[95%] mx-auto"
					>
						{defaultLang.map((lang) => (
							<AutocompleteItem key={lang.to} value={lang.to}>
								{lang.name}
							</AutocompleteItem>
						))}
					</Autocomplete>
					<Textarea
						className="customTheme bg-white"
						placeholder="Introduce tu texto"
						color="primary"
						radius="lg"
						variant="bordered"
						value={message}
						maxLength={limitMsg.limit}
						onChange={handleInputChange}
					/>
					<p className={`w-full text-xs text-right pr-3 -mt-10 mb-2 ${limitMsg.actual === limitMsg.limit && 'font-semibold text-primario'}`}>
						{limitMsg.actual}/{limitMsg.limit}
					</p>
					{/* Renderiza condicionalmente los botones con el spinner en función de listenLoading*/}

					{!langValue || !message ? (
						<Button
							className="min-w-full mx-2 bg-primario/85 hover:cursor-not-allowed"
							disabled = {true}
							children="Traducir"
							type="submit"
							color="primary"
						/>
					) : !listenLoading ? (
						<Button
							className="min-w-full mx-2 bg-primario"
							children="Traducir"
							type="submit"
							color="primary"
							isLoading={false}
						/>
					) : (
						<Button
							className="min-w-full mx-2 bg-primario/70"
							children="Traduciendo"
							type="submit"
							color="primary"
							isLoading={true}
						/>
					)}
				</form>
		</>
	);
}
