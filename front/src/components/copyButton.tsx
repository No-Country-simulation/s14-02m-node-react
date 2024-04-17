import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function CopyButton({ copyText }: { copyText: string }) {
	const [isCopied, setIsCopied] = useState(false);

	async function copyTextToClipboard(text: string) {
		if ("clipboard" in navigator) {
			return await navigator.clipboard.writeText(text);
		} else {
			return document.execCommand("copy", true, text);
		}
	}

	const handleCopyClick = async () => {
		await copyTextToClipboard(copyText);
		try {
			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 1500);
		} catch (error) {
			console.log("Hubo un error al copiar el texto", error);
		}
	};

	return (
		<>
			<Button
				onClick={handleCopyClick}
				isIconOnly
				className="bg-white max-w-7 h-7"
			>
				{/* {isCopied ? "Copied" : "Copy"} */}
				<Image
					src={"/copy-clipboard.png"}
					alt="copy-clipboard-icon"
					width={20}
					height={20}
				/>
			</Button>
		</>
	);
}
