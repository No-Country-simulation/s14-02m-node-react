"use client";

import { Iteam } from "@/interfaces/team.interface";
import { Tab, Tabs } from "@nextui-org/react";
import teamMembers from "@/app/about/teamMembers.json";
import Link from "next/link";
import LinkedinIcon from "@/components/Footer/icons/LinkedinIcon";
import GithubIcon from "@/components/Footer/icons/GithubIcon";

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
									<div
										key={members.id}
										className="flex flex-col justify-center items-center"
									>
										{/* <Image
											src={members.img}
											alt="team-member-picture"
											width={140}
											height={140}
											className="rounded-full"
										/> */}
										<h2 className="font-bold">{members.name}</h2>
										<p className="text-secundario">{members.rol}</p>
										<div className="flex">
											<Link
												href={members.linkedin}
												target="_blank"
												rel="noopener noreferrer"
											>
												<LinkedinIcon fillColor="blue" width={20} height={20} />
											</Link>
											<Link
												href={members.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												<GithubIcon fillColor="black" width={20} height={20} />
											</Link>
										</div>
									</div>
								))}
							</div>
						</Tab>
					</Tabs>
				</div>
			</div>
		</>
	);
}
