"use client";

import { IGroupedMessage } from "@/interfaces/message.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface HistoryZustand {
	history: IGroupedMessage[];
	updateHistory: (response: IGroupedMessage) => void;
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
			cleanHistory: () => set({history: []}),
		}),
		{ name: "history" }
	)
);
