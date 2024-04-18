import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import SVGIcon from "./svgicon";
import { useEffect, useState } from "react";

export default function CopyButton({ copyText }: { copyText: string }) {
	const [isOpen, setIsOpen] = useState(false);
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

	// cerrar el popover despues de 1s
	useEffect(() => {
		if(isOpen){
			setTimeout(() => setIsOpen(false), 1000)
		}
	}, [isOpen])

	return (
		<>
			<Popover placement="top" color="foreground" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
				<PopoverTrigger>
					<Button
						onClick={handleCopyClick}
						isIconOnly
						className="bg-primario text-white fill-slate-400"
					>
						<SVGIcon icon="copy" />
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					¡Texto copiado!
				</PopoverContent>
			</Popover>
		</>
	);
}
