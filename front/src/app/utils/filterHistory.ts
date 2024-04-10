import { IresponseGPT } from "@/interfaces/gpt.interface";

export const filterHistory = (history: IresponseGPT[]) => {
    return history.filter((item) => item.langCode !== "");
}