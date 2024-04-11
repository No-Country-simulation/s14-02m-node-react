import { IHistory } from "@/interfaces/gpt.interface";
import { filterLanguage } from "@/utils/filterLanguage";
import { filterRol } from "@/utils/filterRol";

export default function ChatMessage({ chat }: { chat: IHistory }) {
	{
		/*4. Llamo al filtro en utils para conocer el nombre que pertenece el código ISO y el rol al que pertenece*/
	}
	// console.log({ chat });
	const languageFinded = filterLanguage(chat.langCode);
	const rolFinded = filterRol(chat.rol);
	return (
		<li key={chat.message}>
			<p>Mensaje:{chat.message}</p>
			<p>Idioma:{languageFinded.name}</p>
			<p>Rol:{rolFinded}</p>
		</li>
	);
}
