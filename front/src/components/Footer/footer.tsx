interface FooterProps {
	iconItems: { items: footerItem[] };
	appName: string;
}

interface footerItem {
	icon: string;
	label: string;
	link: string;
	isValid: boolean;
}

export default function Footer({ iconItems, appName }: FooterProps) {
	const currentYear = new Date().getFullYear();

	const iconItemsFiltered: footerItem[] = iconItems.items.filter(
		(icon: footerItem) => icon.isValid
	);

	return (
		<>
			<footer>
				<div>
					{iconItemsFiltered.map((icon: footerItem) => (
						<a href={icon.link}>
							<img src={icon.icon} alt={icon.label} />
							<span>{icon.label}</span>
						</a>
					))}
				</div>
				<div className="">
					<span>icon c</span>
					<span>{appName}</span>
					<span>{currentYear}</span>
					<span>Todos los derechos reservados.</span>
				</div>
			</footer>
		</>
	);
}
