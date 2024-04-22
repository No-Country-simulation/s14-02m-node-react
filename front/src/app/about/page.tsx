"use client";

import { Iteam } from "@/interfaces/team.interface";
import teamMembers from "@/app/about/teamMembers.json";
import Link from "next/link";
import LinkedinIcon from "@/components/Footer/icons/LinkedinIcon";
import GithubIcon from "@/components/Footer/icons/GithubIcon";
import { Image } from "@nextui-org/react";

export default function AboutUs() {
	const { team }: { team: Iteam[] } = teamMembers;
	return (
		<>
			<div className="w-full md:w-1/2 mx-auto flex flex-col justify-start items-center">
				<div className="w-11/12 mx-auto flex flex-col justify-center items-center p-4">
					<div className="mt-3 mb-10">
						<h1 className="text-center text-2xl">Sobre nosotros</h1>
						<p className="text-justify">
							Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus
							sit pretium egestas vel mattis neque.Ornare sagittis, suspendisse in
							hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis
							neque.Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
							lectus sit pretium egestas vel mattis neque.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
						{team.map((members) => (
							<div
								key={members.id}
								className="flex flex-col mx-auto justify-evenly items-center h-[240px] p-2"
							>
								<Image
									src={members.img}
									alt="team-member-picture"
									width={140}
									height={140}
									className="rounded-full max-h-[140px]"
								/>
								<h2 className="font-bold text-center">{members.name}</h2>
								<p className="text-secundario text-center">{members.rol}</p>
								<div className="flex flex-row gap-2 justify-center">
									<Link href={members.linkOne} target="_blank" rel="noopener noreferrer">
										<LinkedinIcon fillColor="blue" width={20} height={20} />
									</Link>
									<Link href={members.linkTwo} target="_blank" rel="noopener noreferrer">
										{members.linkTwo.includes("github") ? (
											<GithubIcon fillColor="black" width={20} height={20} />
										) : members.linkTwo.includes("behance") ? (
											<Image src="/behance.png" width={20} height={20} />
										) : (
											<Image src="/genially.png" width={20} height={20} />
										)}
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
