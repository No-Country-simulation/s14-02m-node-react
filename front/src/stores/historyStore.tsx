"use client";

import { IHistory } from "@/interfaces/gpt.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
	history: IHistory[];
};

type Action = {
	updateHistory: (response: IHistory) => void;
};

export const useHistoryStore = create(
	persist<State & Action>(
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
