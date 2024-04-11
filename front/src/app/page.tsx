import UserForm from "@/components/Forms/userForm";
import { ILanguageCodes } from "@/interfaces/user.interface";

export default function Home() {
	return (
		<>
			<div className="left-4 absolute">
				<h1 className="text-left font-semibold text-[46px] bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
					Hola User, <br />
					<span className="text-slate-700/80">¿Que deseas traducir?</span>
				</h1>
			</div>
			<div className="flex flex-col justify-center items-center w-11/12 h-screen mx-auto">
				<UserForm />
			</div>
		</>
	);
}
