'use client'
import { AudioResponse } from "@/interfaces/backRes.interface";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function PlayButton({ message }: { message: string }) {
	const [audioURL, setAudioURL] = useState<null | string>(null)
	const handlePlay = async () => {
		try {
			const response = await fetch("/api/audio",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({text: message}),
				}
			);
			if (response.ok) {
				const audioResponse: AudioResponse = await response.json()
				setAudioURL(audioResponse.audioUrl)
				console.log("Response OK", await response.json());
			}
		} catch (error) {
			console.log("Error", error);
		}
	};

	return (
		<>
			<Button isIconOnly={true} onClick={handlePlay}>
				🔊
			</Button>
			{audioURL && audioURL}
		</>
	);
}
