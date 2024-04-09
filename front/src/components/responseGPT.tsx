import { IresponseGPT } from "@/interfaces/gpt.interface";

export default function ResponseGPT({ response }: { response: IresponseGPT }) {
	return (
		<>
			Respuesta ChatGPT:
			<p className="text-ejemplo">{response.translated}</p>
			<br></br>
			Idioma: {response.from}
		</>
	);
}
