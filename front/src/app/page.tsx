"use client";
import UserForm from "@/components/Forms/userForm";
import History from "@/components/history";
import { ScrollShadow } from "@nextui-org/react";
import { useHistoryStore } from "@/stores/historyStore";

export default function Home() {
	const { history } = useHistoryStore();

	return (
		<>
			<div className="h-[90%] flex flex-col justify-between bg-slate-50">
				{history.length === 0 ? (
					<ScrollShadow size={20} hideScrollBar>
						<div className="text-gris w-10/12 max-w-80 mx-auto my-auto text-center flex flex-col justify-start gap-10 h-full max-h-[calc(100dvh-272px)]">
							<h1 className="text-lg md:text-2xl">
								¡Bienvenido a <br />
								Talk<span className="text-[#e55958]/90">IA</span>mos!
							</h1>
							<h2 className="text-base md:text-lg">
								Traduce de manera simple y eficaz todo lo que quieras
							</h2>
							<p className="text-sm md:text-base">
								Esta aplicación no guarda ni registra las traducciones solicitadas si no
								te encontrás registrado. Para registrarte hace click{" "}
								<a href="#">aquí</a>
							</p>
						</div>
					</ScrollShadow>
				) : (
					<History />
				)}

				<div className="flex flex-col justify-center items-center w-11/12 md:w-full h-fit mx-auto mb-4">
					<UserForm />
				</div>
			</div>
		</>
	);
}
