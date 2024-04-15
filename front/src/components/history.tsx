"use client";
import { useHistoryStore } from "@/stores/historyStore";
import ChatMessage from "./chatMessage";
import { Button } from "@nextui-org/react";
import { ChatRol } from "@/interfaces/user.interface"
export default function History() {
	//1. Me traigo el historial del store
	const { history, cleanHistory } = useHistoryStore();
	// const messages = history.reduce((acc: any, msg: any) => {
	// 	let bubble: any = {}
	// 	if(msg.rol === ChatRol.IA){
	// 		bubble = {
	// 			...bubble, 
	// 			ia: {...msg}
	// 		}
	// 	}else{
	// 		bubble = {
	// 			...bubble, 
	// 			user: {...msg}
	// 		}
	// 	}

	// 	return [{...acc, 
	// 		{
	// 		ia: bubble.ia as any,
	// 		user: bubble.user as any
	// 		}
	// 	}]
	// }, [] as any)
	// console.log(messages);
	if(history.length > 0) return (
		<div className="w-full">
			<div className="flex flex-col md:grid md:grid-cols-2 gap-4 my-auto bg-slate-50 py-3 px-3 rounded-xl">
				{/*3. Mapeo una lista con los objetos del array history*/}
				{ history.map((chat) => <ChatMessage key={chat.message} chat={chat} />) }
			</div>
			<Button onClick={() => cleanHistory()}>Borrar conversaciones</Button>
		</div>
	);
}
