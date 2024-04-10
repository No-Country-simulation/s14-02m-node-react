"use client";
import { useHistoryStore } from "@/stores/historyStore";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HistoryPage() {
	//1. Me traigo el historial del store
	const history = useHistoryStore((state) => state.history);

	console.log("Log de history en history", history);

	return (
		<>
			<h1>Historial de traducciones</h1>
			{/*3. Mapeo una lista con los objetos del array history*/}
			<ul>
				{history.map((item, index) => (
					<li key={index}>
						<p>Mensaje:{item.message}</p>
						<p>Del:{item.langCode}</p>
						<p>Rol:{item.rol}</p>
					</li>
				))}
			</ul>

			<Button>
				<Link href="/">To Home</Link>
			</Button>
		</>
	);
}
