"use client";
import { AudioResponse } from "@/interfaces/backRes.interface";
import { Button } from "@nextui-org/react";
import { IGroupedMessage } from "@/interfaces/message.interface";
import { useHistoryStore } from "@/stores/historyStore";

export default function PlayButton({ chat }: { chat: IGroupedMessage }) {
	const { history, updateAudio } = useHistoryStore();

	const handlePlay = async () => {
		try {
			const response = await fetch("/api/audio", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ text: chat.response.message }),
			});
			if (response.ok) {
				const audioResponse: AudioResponse = await response.json();
				//Actualiza el audioStore con el id y la url de la respuesta de voz.
				updateAudio(chat, audioResponse.audioUrl);
				console.log("Response OK", audioResponse.audioUrl);
			}
		} catch (error) {
			console.log("Error", error);
		}
	};
	console.log(history);
	return (
		<>
			<Button className="w-1/2" isIconOnly={true} onClick={handlePlay}>
				{chat.audioUrl ? <audio controls src={chat.audioUrl}></audio> : "🔊"}
			</Button>
		</>
	);
}
