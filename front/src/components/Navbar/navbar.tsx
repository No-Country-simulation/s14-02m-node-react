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
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Footer/footer";
import icons from "@/components/Footer/ArrayIcons";

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = ["Ayuda", "Sobre nosotros"];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Image
						src="/Navbar/app-logo.png"
						alt="Brand icon"
						width={30}
						height={30}
					/>
					<p className="font-bold text-inherit">
						Talk<span className="uppercase text-primario ">ia</span>mos
					</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Ayuda
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Sobre Nosotros
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				{/* <NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem> */}
			</NavbarContent>
			{/* Acá comienza el menu lateral */}
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							className="w-full flex justify-start gap-3"
							href="#"
							size="lg"
						>
							{item === "Ayuda" ? (
								<>
									<Image src="/Navbar/help.png" alt="help-icon" width={24} height={24} />
									<>{item}</>
								</>
							) : item === "Sobre nosotros" ? (
								<>
									{" "}
									<Image
										src="/Navbar/about-us.png"
										alt="help-icon"
										width={24}
										height={24}
									/>
									<>{item}</>
								</>
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
						</Link>
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
