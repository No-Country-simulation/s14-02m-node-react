import UserForm from "@/components/Forms/userForm";
import History from "@/components/history";

export default function Home() {
	return (
		<>
		<div className="h-[calc(100dvh-64px)] flex flex-col justify-between">
			<div className="text-[#9CA3AF] w-10/12 max-w-80 mx-auto my-auto text-center flex flex-col justify-center gap-10">
				<h1 className="text-2xl">
					¡Bienvenido a <br />
					Talk<span className="text-secundario/90">IA</span>mos!
				</h1>
				<h2>Traduce de manera simple y eficaz todo lo que quieras</h2>
				<p>Esta aplicación no guarda ni registra las traducciones solicitadas si no te encontrás registrado. Para registrarte hace click <a href="#">aquí</a></p>
			</div>
			<div className="flex flex-col justify-center items-center w-11/12 h-screen mx-auto">
				<History />
				<UserForm />
			</div>
		</div>
			
		</>
	);
}
