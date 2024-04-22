"use client";
import { useHistoryStore } from "@/stores/historyStore";
import ChatMessage from "./chatMessage";
import { Button, ScrollShadow } from "@nextui-org/react";

export default function History() {
	const { history, cleanHistory } = useHistoryStore();
	if (history.length > 0)
		return (
			<ScrollShadow size={20} visibility="top" hideScrollBar>
				<div className="flex flex-col md:w-4/5 lg:w-3/5 gap-4 mt-6 px-7 md:px-0 mx-auto rounded-xl">
					{history.map((chat) => (
						<ChatMessage key={chat.id} chat={chat} />
					))}
					{/* Este botón de borrar aparece solo en tablet/desktop */}
					<div className="hidden md:block">
						<Button className="w-1/4 bg-primario text-white" onClick={() => cleanHistory()}>Borrar conversaciones</Button>
					</div>
				</div>
			</ScrollShadow>
		);
}
