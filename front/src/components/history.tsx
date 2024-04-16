"use client";
import { useHistoryStore } from "@/stores/historyStore";
import ChatMessage from "./chatMessage";
import { Button } from "@nextui-org/react";

export default function History() {
	//1. Me traigo el historial del store
	const { history, cleanHistory } = useHistoryStore();
	// console.log(history[0]);
	if (history.length > 0)
		return (
			<div className="w-full">
				<div className="flex flex-col gap-4 my-auto bg-slate-50 py-3 px-3 rounded-xl">
					{/*3. Mapeo una lista con los objetos del array history*/}
					{history.map((chat) => (
						<ChatMessage key={chat.id} chat={chat} />
					))}
				</div>
				<Button onClick={() => cleanHistory()}>Borrar conversaciones</Button>
			</div>
		);
}
