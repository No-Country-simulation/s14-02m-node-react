"use client";

import {
	Accordion,
	AccordionItem,
	Tabs,
	Tab,
	ScrollShadow,
} from "@nextui-org/react";

interface Faq {
	question: string;
	response: string;
}

import faqsjson from "./faq.json";

const { faq }: { faq: Faq[] } = faqsjson;

export default function AyudaPage() {
	const itemClasses = {
		base: "py-0 w-full",
		title: "font-normal text-medium",
		indicator: "text-medium text-[#e55958]",
		content: "text-small px-2",
	};

	return (
		<>
			<ScrollShadow size={20} hideScrollBar>
				<div className="w-full h-full flex flex-col justify-start items-center">
					<div className="w-full max-w-2xl flex flex-col justify-center items-center p-4">
						<h1 className="text-center">Ayuda</h1>
						<Tabs
							aria-label="Options"
							color="primary"
							variant="underlined"
							className="customTheme"
							classNames={{
								tabList:
									"gap-6 w-full relative rounded-none p-0 border-b border-divider",
								cursor: "w-full bg-[#e55958]",
								tab: "max-w-fit px-0 h-12",
							}}
						>
							<Tab key="FAQ" title="FAQs" className="w-full">
								<Accordion variant="light" className="p-4">
									{faq.map((f, index) => (
										<AccordionItem
											key={index}
											aria-label={f.question}
											title={f.question}
											classNames={itemClasses}
										>
											{f.response}
										</AccordionItem>
									))}
								</Accordion>
							</Tab>
							{/* 
						<Tab key="Soporte" title="Soporte">
							<div>Aquí va el contenido</div
						</Tab>
                        */}
						</Tabs>
					</div>
				</div>
			</ScrollShadow>
		</>
	);
}
