import { useHistoryStore } from "@/stores/historyStore";
import ChatMessage from "./chatMessage";

export default function History() {
	//1. Me traigo el historial del store
	const history = useHistoryStore((state) => state.history);
	// console.log({ history });
	return (
		<div>
			<ul>
				{/*3. Mapeo una lista con los objetos del array history*/}
				{history.map((chat) => (
					<ChatMessage key={chat.message} chat={chat} />
				))}
			</ul>
		</div>
	);
}
