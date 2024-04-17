import {
	IGroupedMessage,
	ISingleMessage,
} from "@/interfaces/message.interface";
import { filterLanguage } from "@/utils/filterLanguage";
import Image from "next/image";
import PlayButton from "./playButton";

export default function ChatMessage({ chat }: { chat: IGroupedMessage }) {
	return (
		<div className="flex flex-col md:flex-row rounded-xl gap-6 bg-secundario px-3 py-2">
			<div>
				<ClientMessageBox message={chat.client} />
				<ResponseMessageBox message={chat.response} />
			</div>
			<div>
				<PlayButton chat={chat} />
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
			className={`flex flex-row md:flex-row-reverse justify-start items-center gap-3 w-full text-white font-bold`}
		>
			<Image
				src={langIcon}
				width={30}
				height={30}
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
			className={`flex flex-row justify-start items-center gap-3 w-full text-sm text-white`}
		>
			<Image
				src={langIcon}
				width={30}
				height={30}
				alt={`Nombre: ${languageFinded.name}`}
			/>
			<p>{message.message}</p>
		</div>
	);
};
