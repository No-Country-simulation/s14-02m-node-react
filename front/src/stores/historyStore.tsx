"use client";

import { IresponseGPT } from "@/interfaces/gpt.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
	history: IresponseGPT[];
};

type Action = {
	updateHistory: (response: IresponseGPT) => void;
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
