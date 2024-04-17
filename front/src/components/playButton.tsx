"use client";
import { AudioResponse } from "@/interfaces/backRes.interface";
import { Button } from "@nextui-org/react";
import { useState, useRef } from "react";
import { IGroupedMessage } from "@/interfaces/message.interface";
import { useHistoryStore } from "@/stores/historyStore";

export default function PlayButton({ chat }: { chat: IGroupedMessage }) {
	const { history, updateAudio } = useHistoryStore();
	const [isLoading, setIsLoading] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	const handlePlay = async () => {
		try {
			setIsLoading(true);
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
				setIsLoading(false);
				console.log("Response OK", audioResponse.audioUrl);
			}
		} catch (error) {
			console.log("Error", error);
		}
	};

	const play = () => {
		audioRef.current?.play();
	};
	console.log(history);
	return (
		<>
			{chat.audioUrl ? (
				<Button onClick={play}>
					🔊 Escuchar
					<audio ref={audioRef} src={chat.audioUrl}></audio>
				</Button>
			) : (
				<Button className="w-1/2" isIconOnly={true} onClick={handlePlay}>
					🔊 {isLoading && "Cargando..."}
				</Button>
			)}
		</>
	);
}
