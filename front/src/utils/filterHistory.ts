import { ISingleMessage } from "@/interfaces/message.interface";
import { ILanguageCodes, IChatRol } from "@/interfaces/user.interface";

export const filterHistory = (
	history: ISingleMessage[],
	langCode: ILanguageCodes,
	rol: IChatRol
) => {
	return history.filter((message) => {
		const filterLang = langCode ? langCode === message.langCode : true;
		const filterRol = rol ? rol === message.rol : true;
		return filterLang && filterRol;
	});
};
