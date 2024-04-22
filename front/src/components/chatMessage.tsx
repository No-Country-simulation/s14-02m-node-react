import {
	IGroupedMessage,
	ISingleMessage,
} from "@/interfaces/message.interface";
import { filterLanguage } from "@/utils/filterLanguage";
import Image from "next/image";
import PlayButton from "./playButton";
import CopyButton from "./copyButton";
import ShareButton from "./shareButton";

export default function ChatMessage({ chat }: { chat: IGroupedMessage }) {
	return (
		<div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center rounded-xl gap-4 bg-white px-3 py-2 shadow-md">
			<div className="space-x-2">
				<PlayButton chat={chat} />
				<CopyButton copyText={chat.response.message} />
				<ShareButton message={chat.response.message}/>
			</div>
			<div className="flex flex-col gap-4">
				<ResponseMessageBox message={chat.response} />
				<ClientMessageBox message={chat.client} />
			</div>
		</div>
	);
}

const ClientMessageBox = ({ message }: { message: ISingleMessage }) => {
	const languageFinded = filterLanguage(message.langCode);
	const langIcon = `https://unpkg.com/language-icons@0.3.0/icons/${languageFinded.to}.svg`;
	return (
		<div
			key={message.message}
			className={`flex flex-col items-start gap-3 text-sm w-full italic text-white`}
		>
			<div className="flex flex-row justify-center items-center gap-2">
				<Image
					src={langIcon}
					width={30}
					height={30}
					className="rounded-full"
					alt={`Nombre: ${languageFinded.name}`}
				/>
				<p className="text-gris text-xs font-normal">{languageFinded.name}</p>
			</div>

			<p className="text-black">{message.message}</p>
		</div>
	);
};

const ResponseMessageBox = ({ message }: { message: ISingleMessage }) => {
	const languageFinded = filterLanguage(message.langCode);
	const langIcon = `https://unpkg.com/language-icons@0.3.0/icons/${languageFinded.to}.svg`;
	return (
		<div
			key={message.message}
			className={`flex flex-col items-start gap-3 w-full text-secundario font-semibold`}
		>
			<div className="flex flex-row justify-center items-center gap-2">
				<Image
					src={langIcon}
					width={30}
					height={30}
					className="rounded-full"
					alt={`Nombre: ${languageFinded.name}`}
				/>
				<p className="text-gris text-xs font-normal">{languageFinded.name}</p>
			</div>
			<p>{message.message}</p>
		</div>
	);
};
