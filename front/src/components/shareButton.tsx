import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { FacebookShareButton, FacebookIcon, XIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

import SVGIcon from "./svgicon";

export default function ShareButton({ message }: { message: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button isIconOnly className="bg-secundario text-white" onClick={onOpen}>
                <div className="text-white">
                    <SVGIcon icon="share" />
                </div>
            </Button>

            <Modal
                isOpen={isOpen}
                placement="bottom"
                onOpenChange={onOpenChange}
                hideCloseButton={true}
                radius="lg"
            >
                <ModalContent className="m-0 rounded-b-none rounded-t-[40px] sm:rounded-xl">
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <div className="w-[134px] rounded-xl h-[5px] bg-negro mx-auto"></div>
                            </ModalHeader>
                            <ModalBody className="p-4">
                                <Button
                                    isIconOnly
                                    className="bg-[#FEE2E2]  rounded-full mx-auto text-acento"
                                    onClick={onOpen}
                                    size="lg"
                                >
                                    <SVGIcon icon="share" />
                                </Button>
                                <p className="font-normal text-2xl text-center">Compartir en</p>
                            </ModalBody>
                            <ModalFooter>
                                <div className="mx-auto space-x-3">
                                    <FacebookShareButton hashtag={message} url="https://talkiamos.vercel.app/">
                                        <FacebookIcon className="rounded-lg w-12 h-12" />
                                    </FacebookShareButton>
                                    <TwitterShareButton title={message} url="https://talkiamos.vercel.app/">
                                        <XIcon className="rounded-lg w-12 h-12" />
                                    </TwitterShareButton>
                                    <WhatsappShareButton content={message} title={message} url="https://talkiamos.vercel.app/">
                                        <WhatsappIcon className="rounded-lg w-12 h-12" />
                                    </WhatsappShareButton>
                                    {/* 
                                    <LinkedinShareButton title={message} summary={message} url="https://talkiamos.vercel.app/">
                                        <LinkedinIcon className="rounded-lg w-12 h-12" />
                                    </LinkedinShareButton>
                                    <EmailShareButton >
                                        <EmailIcon className="rounded-lg w-12 h-12"/>
                                    </EmailShareButton> 
                                    */}
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}