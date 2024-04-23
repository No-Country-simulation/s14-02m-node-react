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
import { usePathname } from "next/navigation";

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { history, cleanHistory } = useHistoryStore();
	const path = usePathname()
	const menuItems = [
		{
			name: 'Inicio',
			path: '/',
			image: '/icon-192x192.png'
		},
		{
			name: 'Ayuda',
			path: '/ayuda',
			image: '/Navbar/help.png'
		},
		{
			name: 'Sobre Nosotros',
			path: '/about',
			image: '/Navbar/about-us.png'
		},
	];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Link href="/" className="flex flex-row gap-2">
						<Image
							src="/Navbar/app-logo.png"
							alt="Brand icon"
							width={30}
							height={30}
						/>
						<p className="font-bold text-inherit text-slate-700">
							Talk<span className="uppercase text-primario ">ia</span>mos
						</p>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{
					menuItems.map(menu => (
						<NavbarMenuItem key={menu.path} isActive={menu.path === path}>
							<Link
								href={menu.path}
								className={`customTheme flex flex-row justify-start items-center gap-2 ${menu.path === path ? 'text-primario' : 'text-gris'}`}
							>
								{menu.name}
							</Link>
						</NavbarMenuItem>
					))
				}
			</NavbarContent>
			{/* Boton de borrar historial, aparece con breakpoints md */}
			<NavbarContent justify="end">
				{history.length > 0 && path === '/' && !isMenuOpen ? (
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
			<NavbarMenu className="h-screen flex flex-col justify-between">
				<div>
					{
						menuItems.map(menu => (
							<NavbarMenuItem className="my-3" key={menu.name} isActive={menu.path === path}>
								<Link
									href={menu.path}
									className={`flex flex-row justify-start items-center gap-2 ${menu.path === path ? 'text-primario' : 'text-gris'}`}
								>
									<Image src={menu.image} alt="help-icon" width={24} height={24} />
									{menu.name}
								</Link>
							</NavbarMenuItem>
						))
					}
				</div>
				<div className="mb-10">
					<Footer appName="TalkIAmos" iconItems={icons} />
				</div>
			</NavbarMenu>
		</Navbar>
	);
}
