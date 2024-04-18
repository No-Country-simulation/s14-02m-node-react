import { Button } from "@nextui-org/react";
import SVGIcon from "./svgicon";

export default function CopyButton({ copyText }: { copyText: string }) {
	const copyTextToClipboard = async (text: string) => {
		if (navigator.clipboard) {
			return await navigator.clipboard.writeText(text);
		} else {
			return document.execCommand("copy", true, text); // creo que está muy deprecado este metodo, pero bien por usarlo en caso que no exista clipboard
		}
	}

	const handleCopyClick = async () => {
		await copyTextToClipboard(copyText);
	};

	return (
		<>
			<Button
				onClick={handleCopyClick}
				isIconOnly
				className="bg-primario text-white fill-slate-400"
			>
				<SVGIcon icon="copy" />
			</Button>
		</>
	);
}
