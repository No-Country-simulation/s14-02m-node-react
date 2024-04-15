import UserForm from "@/components/Forms/userForm";

export default function Home() {
	return (
		<>
			<div className="text-#9CA3AF w-10/12 mx-auto text-center flex flex-col justify-center gap-10">
				<h1 className="text-2xl">
					!Bienvenido a <br />
					Talk<span className="text-secundario">IA</span>mos!
				</h1>
				<h2>Traduce de manera simple y eficaz todo lo que quieras</h2>
			</div>
			<div className="flex flex-col justify-center items-center w-11/12 h-screen mx-auto">
				<UserForm />
			</div>
		</>
	);
}
