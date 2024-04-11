"use client";
import { useHistoryStore } from "@/stores/historyStore";
import { filterLanguage } from "@/utils/filterLanguage";
import { filterRol } from "@/utils/filterRol";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HistoryPage() {
	//1. Me traigo el historial del store
	const history = useHistoryStore((state) => state.history);
	return (
		<>
			<h1>Historial de traducciones</h1>
			{/*3. Mapeo una lista con los objetos del array history*/}
			<ul>
				{history.map((chat) => {
					{/*4. Llamo al filtro en utils para conocer el nombre que pertenece el código ISO y el rol al que pertenece*/}
					const languageFinded = filterLanguage(chat.langCode)
					const rolFinded = filterRol(chat.rol)
					return <li key={chat.message}>
						<p>Mensaje:{chat.message}</p>
						<p>Idioma:{languageFinded.name}</p>
						<p>Rol:{rolFinded}</p>
					</li>
				})}
			</ul>

			<Button>
				<Link href="/">To Home</Link>
			</Button>
		</>
	);
}
