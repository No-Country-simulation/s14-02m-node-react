"use client";
import { AudioResponse } from "@/interfaces/backRes.interface";
import { Button } from "@nextui-org/react";
import { useState, useRef } from "react";
import { IGroupedMessage } from "@/interfaces/message.interface";
import { useHistoryStore } from "@/stores/historyStore";
import SVGIcon from "@/components/svgicon";

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

	if (chat.audioUrl)
		return (
			<Button
				className="min-w-[200px] space-x-2 bg-secundario text-white"
				onClick={play}
			>
				<SVGIcon icon="play" /> <span>Reproducir</span>
				<audio ref={audioRef} src={chat.audioUrl}></audio>
			</Button>
		);
	else
		return (
			<Button
				className="min-w-[200px] space-x-2 bg-secundario text-white"
				isIconOnly={true}
				onClick={handlePlay}
			>
				<SVGIcon icon="listen" />{" "}
				<span>{isLoading ? "Cargando..." : "Oír pronunciación"}</span>
			</Button>
		);
}
