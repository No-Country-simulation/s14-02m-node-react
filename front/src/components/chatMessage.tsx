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
				<ClientMessageBox chat={chat.client} />
				<ResponseMessageBox chat={chat} />
			</div>
			<div>
				<PlayButton chat={chat} />
			</div>
		</div>
	);
}

const ClientMessageBox = ({ chat }: { chat: ISingleMessage }) => {
	const languageFinded = filterLanguage(chat.langCode);
	const langIcon = `https://unpkg.com/language-icons@0.3.0/icons/${languageFinded.to}.svg`;
	return (
		<div
			key={chat.message}
			className={`flex flex-row md:flex-row-reverse justify-start items-center gap-3 w-full text-white font-bold`}
		>
			<Image
				src={langIcon}
				width={30}
				height={30}
				alt={`Nombre: ${languageFinded.name}`}
			/>
			<p>{chat.message}</p>
		</div>
	);
};

const ResponseMessageBox = ({ chat }: { chat: IGroupedMessage }) => {
	const languageFinded = filterLanguage(chat.response.langCode);
	const langIcon = `https://unpkg.com/language-icons@0.3.0/icons/${languageFinded.to}.svg`;
	return (
		<div
			key={chat.response.message}
			className={`flex flex-row justify-start items-center gap-3 w-full text-sm text-white`}
		>
			<Image
				src={langIcon}
				width={30}
				height={30}
				alt={`Nombre: ${languageFinded.name}`}
			/>
			<p>{chat.response.message}</p>
		</div>
	);
};
