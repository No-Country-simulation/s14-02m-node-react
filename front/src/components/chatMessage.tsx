import {
	IGroupedMessage,
	ISingleMessage,
} from "@/interfaces/message.interface";
import { filterLanguage } from "@/utils/filterLanguage";
import Image from "next/image";
import PlayButton from "./playButton";
import CopyButton from "./copyButton";

export default function ChatMessage({ chat }: { chat: IGroupedMessage }) {
	return (
		<div className="flex flex-col md:flex-row-reverse md:justify-between rounded-xl gap-2 bg-secundario px-3 py-2 shadow-sm shadow-primario">
			<div className="space-x-2">
				<PlayButton chat={chat} />
				<CopyButton copyText={chat.response.message} />
			</div>
			<div>
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
			className={`flex flex-row justify-start items-center gap-3 text-sm w-full italic text-white`}
		>
			<Image
				src={langIcon}
				width={30}
				height={30}
				className="rounded-full"
				alt={`Nombre: ${languageFinded.name}`}
			/>
			<p>{message.message}</p>
		</div>
	);
};

const ResponseMessageBox = ({ message }: { message: ISingleMessage }) => {
	const languageFinded = filterLanguage(message.langCode);
	const langIcon = `https://unpkg.com/language-icons@0.3.0/icons/${languageFinded.to}.svg`;
	return (
		<div
			key={message.message}
			className={`flex flex-row justify-start items-center gap-3 w-full text-white font-bold`}
		>
			<Image
				src={langIcon}
				width={30}
				height={30}
				className="rounded-full"
				alt={`Nombre: ${languageFinded.name}`}
			/>
			<p>{message.message}</p>
		</div>
	);
};
