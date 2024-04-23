"use client";
import { useHistoryStore } from "@/stores/historyStore";
import ChatMessage from "./chatMessage";
import { Button, ScrollShadow } from "@nextui-org/react";

export default function History() {
	const { history, cleanHistory } = useHistoryStore();
	if (history.length > 0)
		return (
			<ScrollShadow size={20} visibility="top" hideScrollBar>
				<div className="flex flex-col md:w-4/5 lg:w-3/5 gap-4 mt-4 px-3 md:px-0 mx-auto rounded-xl">
					{/* Este botón de borrar aparece solo en tablet/desktop */}
					<div className="hidden md:block mx-auto min-w-fit">
						<Button
						radius="full"
							className="bg-primario text-white"
							onClick={() => cleanHistory()}
						>
							Borrar todo el historial
						</Button>
					</div>
					<div className="flex flex-col gap-4 mb-6">
					{history.map((chat) => (
						<ChatMessage key={chat.id} chat={chat} />
					))}
					</div>
				</div>
			</ScrollShadow>
		);
}
