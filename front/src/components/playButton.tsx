import { Button } from "@nextui-org/react";

export default function PlayButton({ message }: { message: string }) {
	const handlePlay = async () => {
		try {
			const response = await fetch(
				"https://talkiamos-production.up.railway.app/api/translate-to-audio",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(message),
				}
			);
			if (response.ok) {
				console.log("Response OK", response);
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
		</>
	);
}
