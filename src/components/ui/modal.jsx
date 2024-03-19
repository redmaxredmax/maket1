import React from 'react'
import { Dialog } from '@headlessui/react'

export const Modal = ({isOpen,close,children}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={close}
            className="absolute z-50"
        >
            <div className="fixed inset-0 flex w-screen bg-[#00000080] items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
                    <Dialog.Title>Complete your order</Dialog.Title>
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}
