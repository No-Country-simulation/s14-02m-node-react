"use client";

import { Iteam } from "@/interfaces/team.interface";
import { Tab, Tabs } from "@nextui-org/react";
import teamMembers from "@/app/about/teamMembers.json";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/footer";
import icons from "@/components/Footer/ArrayIcons";

export default function AboutUs() {
	const { team }: { team: Iteam[] } = teamMembers;
	return (
		<>
			<div className="w-full h-full flex flex-col justify-start items-center">
				<div className="w-11/12 mx-auto flex flex-col justify-center items-center p-4">
					<h1 className="text-center text-2xl">Sobre nosotros</h1>
					<Tabs
						color="default"
						variant="underlined"
						classNames={{
							cursor: "w-full bg-[#e55958]",
							tabContent: "group-data-[selected=true]:text-[#e55958]",
						}}
					>
						<Tab key="about-us" title="Sobre talkIAmos" className="text-md">
							<p className="text-justify">
								Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus
								sit pretium egestas vel mattis neque.Ornare sagittis, suspendisse in
								hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis
								neque.Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
								lectus sit pretium egestas vel mattis neque.
							</p>
						</Tab>

						<Tab key="team" title="Conoce el equipo" className="text-md">
							<div className="grid grid-cols-2 gap-6">
								{team.map((members) => (
									<div key={members.id}>
										{/* <Image
											src={members.img}
											alt="team-member-picture"
											width={140}
											height={140}
											className="rounded-full"
										/> */}
										<h2 className="font-bold">{members.name}</h2>
										<p className="text-secundario">{members.rol}</p>
										<Link href={members.linkedin}>Linkedin</Link>
										<Link href={members.github}>Github</Link>
									</div>
								))}
							</div>
						</Tab>
					</Tabs>
				</div>
				<Footer appName="TalkIAmos" iconItems={icons} />
			</div>
		</>
	);
}
