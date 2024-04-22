import {
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/react";
import SVGIcon from "./svgicon";
import icons from "./Footer/ArrayIcons";

export default function ShareButton() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button isIconOnly className="bg-secundario text-white" onClick={onOpen}>
				<SVGIcon icon="share" />
			</Button>

			<Modal
				isOpen={isOpen}
				placement="bottom"
				onOpenChange={onOpenChange}
				hideCloseButton={true}
				radius="lg"
			>
				<ModalContent className="m-0 rounded-b-none rounded-t-[40px]">
					{(onClose) => (
						<>
							<ModalHeader>
								<div className="w-[134px] rounded-xl h-[5px] bg-negro mx-auto"></div>
							</ModalHeader>
							<ModalBody className="p-4">
								<Button
									isIconOnly
									className="bg-[#FEE2E2]  rounded-full mx-auto "
									onClick={onOpen}
									size="lg"
								>
									<svg
										className="w-4 h-4 text-acento"
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 512 512"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z"></path>
									</svg>
								</Button>
								<p className="font-normal text-2xl text-center">Compartir en</p>
							</ModalBody>
							<ModalFooter>
								<div className="mx-auto space-x-3">
									{icons.map((icon) => (
										<Button
											isIconOnly
											className="bg-transparent text-white fill-[#9CA3AF]"
											key={icon.label}
											as="a"
											href="#pito"
										>
											<icon.icon />
										</Button>
									))}
								</div>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
