import { IHistory } from "@/interfaces/gpt.interface";
import { filterLanguage } from "@/utils/filterLanguage";
import { filterRol } from "@/utils/filterRol";
import Image from "next/image";
import PlayButton from "./playButton";

export default function ChatMessage({ chat }: { chat: IHistory }) {
	const rolFinded = filterRol(chat.rol);
	switch (rolFinded) {
		case "Usuario":
			return <ClientMessageBox chat={chat} />;
		default:
			return <ResponseMessageBox chat={chat} />;
	}
}

const ClientMessageBox = ({ chat }: { chat: IHistory }) => {
	const languageFinded = filterLanguage(chat.langCode);
	const langIcon = `https://unpkg.com/language-icons@0.3.0/icons/${languageFinded.to}.svg`;
	return (
		<div
			key={chat.message}
			className={`flex flex-row-reverse items-center text-right gap-3 bg-blue-100 rounded-xl py-3 px-6`}
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

const ResponseMessageBox = ({ chat }: { chat: IHistory }) => {
	const languageFinded = filterLanguage(chat.langCode);
	const langIcon = `https://unpkg.com/language-icons@0.3.0/icons/${languageFinded.to}.svg`;
	return (
		<div
			key={chat.message}
			className={`flex flex-row justify-start items-center text-left gap-3 bg-green-100 rounded-xl py-3 px-6`}
		>
			<Image
				src={langIcon}
				width={30}
				height={30}
				alt={`Nombre: ${languageFinded.name}`}
			/>
			<p>{chat.message}</p>
			<PlayButton message={chat.message} />
		</div>
	);
};
