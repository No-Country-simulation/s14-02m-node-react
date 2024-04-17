"use client";

import { IGroupedMessage } from "@/interfaces/message.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface HistoryZustand {
	history: IGroupedMessage[];
	updateHistory: (response: IGroupedMessage) => void;
	updateAudio: (response: IGroupedMessage, audioUrl: string) => void;
	cleanHistory: () => void;
}

export const useHistoryStore = create(
	persist<HistoryZustand>(
		(set) => ({
			history: [],
			updateHistory: (response) =>
				set((state) => ({
					history: [...state.history, response],
				})),
			updateAudio: (response, audioUrl) =>
				set((state) => {
					const findhistory = state.history.find(({ id }) => response.id === id);
					if (findhistory) {
						const filterHistory = state.history.filter(
							({ id }) => response.id !== id
						);
						if (filterHistory) {
							return {
								history: [...filterHistory, { ...findhistory, audioUrl: audioUrl }],
							};
						}
						return {
							history: [...state.history, { ...findhistory, audioUrl: audioUrl }],
						};
					} else {
						return { history: [...state.history] };
					}
				}),
			cleanHistory: () => set({ history: [] }),
		}),
		{ name: "history" }
	)
);
