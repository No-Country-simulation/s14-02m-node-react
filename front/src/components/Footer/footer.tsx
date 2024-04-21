import CopyrightIcon from "@/components/Footer/icons/CopyrightIcon";

interface FooterProps {
	iconItems: footerItem[];
	appName: string;
}

interface footerItem {
	icon: (props: any) => JSX.Element;
	label: string;
	link: string;
	isValid: boolean;
}

export default function Footer({ iconItems, appName }: FooterProps) {
	const currentYear = new Date().getFullYear();

	const iconItemsFiltered: footerItem[] = iconItems.filter(
		(icon: footerItem) => icon.isValid
	);

	return (
		<>
			<footer className="flex justify-center h-32">
				<div className="flex flex-col border-t-1 border-t-[#9CA3AF]/40 w-4/5 justify-evenly items-center">
					<div className="flex flex-row gap-6">
						{iconItemsFiltered.map((icon: footerItem, index) => (
							<a
								key={index}
								href={icon.link}
								className="hover:scale-125 inline-block"
								target="_blank"
								rel="noopener noreferrer"
							>
								{icon.icon({ fillColor: "#9CA3AF", width: 24, height: 24 })}
							</a>
						))}
					</div>
					<div className="flex flex-wrap text-[#9CA3AF] text-base gap-1 justify-center items-center">
						<div className="flex flex-row">
							<span>
								<CopyrightIcon fillColor="#9CA3AF" width={24} height={24} />
							</span>
							<span>{currentYear}</span>
							<span>{appName}.</span>
						</div>
						<span>Todos los derechos reservados.</span>
					</div>
				</div>
			</footer>
		</>
	);
}
