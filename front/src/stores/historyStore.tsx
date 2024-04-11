"use client";

import { IHistory } from "@/interfaces/gpt.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface HistoryZustand {
	history: IHistory[];
	updateHistory: (response: IHistory) => void;
}

export const useHistoryStore = create(
	persist<HistoryZustand>(
		(set) => ({
			history: [],
			updateHistory: (response) =>
				set((state) => ({
					history: [...state.history, response],
				})),
		}),
		{ name: "history" }
	)
);
