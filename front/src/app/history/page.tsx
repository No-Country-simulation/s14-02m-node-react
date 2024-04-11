"use client";
import History from "@/components/history";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HistoryPage() {
	return (
		<>
			<h1>Historial de traducciones</h1>
			<History />
			<Button>
				<Link href="/">To Home</Link>
			</Button>
		</>
	);
}
