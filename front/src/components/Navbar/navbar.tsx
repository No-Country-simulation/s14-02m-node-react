"use client";

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Footer/footer";
import icons from "@/components/Footer/ArrayIcons";
import { useHistoryStore } from "@/stores/historyStore";
import DeleteIcon from "./deleteIcon";

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { history, cleanHistory } = useHistoryStore();
	const menuItems = ["Ayuda", "Sobre nosotros"];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Link href="/">
						<Image
							src="/Navbar/app-logo.png"
							alt="Brand icon"
							width={30}
							height={30}
						/>
					</Link>
					<p className="font-bold text-inherit">
						Talk<span className="uppercase text-primario ">ia</span>mos
					</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem isActive>
					<Link
						href="/ayuda"
						aria-current="page"
						color="primary"
						className="customTheme"
					>
						Ayuda
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/about">
						Sobre Nosotros
					</Link>
				</NavbarItem>
			</NavbarContent>
			{/* Boton de borrar historial, aparece con breakpoints md */}
			<NavbarContent justify="end">
				{history.length > 0 ? (
					<NavbarItem>
						<Button
							className="md:hidden"
							isIconOnly
							variant="light"
							onClick={() => cleanHistory()}
						>
							<DeleteIcon fillColor="#EF4565" />
						</Button>
					</NavbarItem>
				) : (
					<NavbarItem>
						<Button
							className="hidden"
							isIconOnly
							variant="light"
							onClick={() => cleanHistory()}
						>
							<DeleteIcon fillColor="#EF4565" />
						</Button>
					</NavbarItem>
				)}
			</NavbarContent>
			{/* Acá comienza el menu lateral */}
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						{item === "Ayuda" ? (
							<Link
								href="/ayuda"
								className="flex flex-row justify-start items-center gap-2"
							>
								<Image src="/Navbar/help.png" alt="help-icon" width={24} height={24} />
								<p>{item}</p>
							</Link>
						) : item === "Sobre nosotros" ? (
							<Link
								href="/about"
								className="flex flex-row justify-start items-center gap-2"
							>
								<Image
									src="/Navbar/about-us.png"
									alt="help-icon"
									width={24}
									height={24}
								/>
								<>{item}</>
							</Link>
						) : (
							<>
								<Image
									src="/Navbar/chat-bubble.png"
									alt="empty-space"
									width={24}
									height={24}
								/>
								{item}
							</>
						)}
					</NavbarMenuItem>
				))}
				<div className="relative h-full">
					<div className="absolute bottom-0">
						<Footer appName="TalkIAmos" iconItems={icons} />
					</div>
				</div>
			</NavbarMenu>
		</Navbar>
	);
}
