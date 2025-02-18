import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUiProvider from "@/components/provider-nextui";
import Footer from "@/components/Footer/footer";
import icons from "@/components/Footer/ArrayIcons";
import Nav from "@/components/Navbar/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextUiProvider>
					<Nav />
					{children}
					<div className="hidden md:block">
						<Footer appName="Transiapp" iconItems={icons} />
					</div>
				</NextUiProvider>
			</body>
		</html>
	);
}
