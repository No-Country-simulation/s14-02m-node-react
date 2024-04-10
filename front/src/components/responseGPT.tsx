import { IBackendResponse } from "@/interfaces/backendResponseText.interface";

export default function ResponseGPT({
	response,
}: {
	response: IBackendResponse;
}) {
	return (
		<>
			Respuesta ChatGPT:
			<p className="text-ejemplo">{response.translated}</p>
			<br></br>
			Idioma: {response.from}
		</>
	);
}
