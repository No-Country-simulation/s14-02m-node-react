import { IresponseGPT } from "@/interfaces/gpt.interface";

export default function ResponseGPT({ response }: { response: IresponseGPT }) {
  return (
    <>
      Respuesta ChatGPT: {response.translated}
      <br></br>
      Idioma: {response.from}
    </>
  )
}