'use client'
import React, { Dispatch, SetStateAction } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function ErrorFormMessage({ message, open, setOpen }: { message: string, open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <>
            <Modal isOpen={open} placement="bottom" hideCloseButton>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Favor de revisar input</ModalHeader>
                            <ModalBody className="px-6">
                                <p className="font-semibold">{message}</p>
                                <p className="italic">Por favor inténtalo nuevamente</p>
                                <Button color="danger" variant="bordered" onClick={() => setOpen(false)}>
                                    Reintentar
                                </Button>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

